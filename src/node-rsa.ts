import NodeRSA from 'node-rsa';
import config from './config';

const key = new NodeRSA({ b: 2048 });

//公钥证书
// const publicPem = key.exportKey('pkcs8-public-pem');
const publicPem = config.publicKeyForClient;
//私钥证书
// const privatePem = key.exportKey('pkcs8-private-pem');
const privatePem = config.privateKeyForClient;

// 私钥
const privateKey = new NodeRSA();
privateKey.importKey(privatePem, 'pkcs8-private-pem');

const text = 'Hello RSA!';
// 私钥签名
const signature = privateKey.sign(new Buffer(text), 'base64', 'buffer');
console.log('signature ====== ', signature);

// 公钥
const publucKey = new NodeRSA();
publucKey.importKey(publicPem, 'pkcs8-public-pem');

// 公钥验签
const result = publucKey.verify(
  new Buffer(text),
  signature,
  'buffer',
  'base64'
);
console.log('result ====== ', result);
