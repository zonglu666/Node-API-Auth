import * as crypto from 'crypto';

const a1 = crypto.createHash('sha256').update('AAA').digest('hex');
const a2 = crypto.createHash('sha256').update('AAA').digest('hex');
console.log('a1', a1);
console.log('a2', a2);
