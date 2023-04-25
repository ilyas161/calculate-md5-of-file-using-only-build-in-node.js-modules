//const { argv }     = require('process');
const crypto       = require('crypto');
const fs           = require('fs');

if(process.argv.length <= 2) {
    console.log('no path argument');
    process.exit(1);
}
if(process.argv.length > 3) {
    console.log('please write path argument');
    process.exit(2);
}

const inputStream = fs.createReadStream(`./${process.argv[2]}`);

inputStream.pipe(crypto.createHash("md5")).setEncoding('hex').on("data", (chunk) => {
    console.log(chunk);
});