const sha256 = require('sha256');

class Block {
    constructor(index, timestamp, data, prevHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.thisHash = sha256(
            this.index + this.timestamp + this.data + this.prevHash
        );
    }
}

const createOriginBlock = () => {
    new Block(0, Date.now(), 'OriginBlock', '0')
};

const nextBlock = (lastBlock, data) => {
    new Block(lastBlock.index + 1, Date.now(), data, lastBlock.thisHash)
};

const createBlockchain = (num) => {
    const blockchain = [createOriginBlock()];
    let previousBlock = blockchain[0];

    for (let i = 1; i < num; i +=1) {
        const blockToAdd = nextBlock(previousBlock, `Block #${i}`);
        blockchain.push(blockToAdd);
        previousBlock = blockToAdd;
    }
    console.log(blockchain)
};

// const length = 10;
// createBlockchain(length);

