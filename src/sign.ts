import config from './config';
import * as NodeRSA from 'node-rsa';
import * as crypto from 'crypto';
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
  console.log('params', params);
  const stringToSign = _.toPairs(params) // convert object to array [[key1, value1], [key2, value2]]
    .sort((pair1, pair2) => stringCompare(pair1[0], pair2[0])) // sort by key
    .map((pair) => pair[0] + '=' + pair[1]) // [key1=value1, key2=value2]
    .join('&'); // key1=value1&key2=value2
  console.log('stringToSign ====== ', stringToSign);
  return stringToSign;
}

function signWithPrivateKey(privateKey: string, params: any = {}) {
  // 拼接签名字符串
  const stringToSign = generateStringToSign(params);
  console.log('stringToSign ====== ', stringToSign);
  // 使用私钥签名
  const privateKeyForClient = new NodeRSA(privateKey);
  const signature = privateKeyForClient.sign(
    new Buffer(stringToSign),
    'base64',
    'buffer'
  );
  return signature;
}

function verifyWithPublicKey(publicKey, signature) {
  const key = new NodeRSA(publicKey);
  return key.verify(new Buffer(signature), signature, 'buffer', 'base64');
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
    signature
  );
  console.log('verifyResult ====== ', verifyResult);
}

main();
