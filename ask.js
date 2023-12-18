const readline = require('readline')

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
  });

let start = async (data)=>{

    return await new Promise((resolve, reject) => {
        rlp.question(data + " ", (input) => resolve(input));
    });

}
module.exports = start;