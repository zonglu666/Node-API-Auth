import config from './config';
import NodeRSA from 'node-rsa';
import crypto from 'crypto';
import _ from 'lodash';

function hmacSha256(string: string) {
  const buffer = crypto.createHash('sha256').update(string).digest('hex');
  return buffer;
}

function generateStringToSign(params: any = {}) {
  function stringCompare(str1: string, str2: string): number {
    if (str1 < str2) {
      return -1;
    } else if (str1 > str2) {
      return 1;
    } else {
      return 0;
    }
  }
  const stringToSign = _.toPairs(params) // convert object to array [[key1, value1], [key2, value2]]
    .sort((pair1, pair2) => stringCompare(pair1[0], pair2[0])) // sort by key
    .map((pair) => pair[0] + '=' + pair[1]) // [key1=value1, key2=value2]
    .join('&'); // key1=value1&key2=value2
  return stringToSign;
}

function signWithPrivateKey(privateKey: string, params: any = {}) {
  // 拼接签名字符串
  const stringToSign = generateStringToSign(params);
  console.log('stringToSign ====== ', stringToSign);
  // 使用私钥签名
  const key = new NodeRSA();
  key.importKey(privateKey, 'pkcs8-private-pem');
  const signature = key.sign(new Buffer(stringToSign), 'base64', 'buffer');
  return signature;
}

function verifyWithPublicKey(
  publicKey: string,
  signature: string,
  params: any
) {
  const stringToSign = generateStringToSign(params);
  const key = new NodeRSA();
  key.importKey(publicKey, 'pkcs8-public-pem');
  return key.verify(new Buffer(stringToSign), signature, 'buffer', 'base64');
}

function main() {
  // 使用 privateKeyForClient 进行签名
  const payload = {
    b: 'BBB',
    a: 'AAA',
  };
  const signature = signWithPrivateKey(config.privateKeyForClient, payload);
  console.log('signature ====== ', signature);

  // 使用 publicA 进行验签
  const verifyResult = verifyWithPublicKey(
    config.publicKeyForClient,
    signature,
    payload
  );
  console.log('verifyResult ====== ', verifyResult);
}

main();
