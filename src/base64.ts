const transKey = 'stoa4CuhoiKzjoFne/etqVjIYStCuw3f2WDqgn7duXA=';

const ascii = Buffer.from(transKey, 'base64').toString('ascii');

console.log('ascii', ascii);
console.log('ascii', ascii.length);

const base64str = new Buffer(ascii).toString('base64');
console.log('base64str', base64str);
