import * as crypto from 'crypto';

// const a1 = crypto.createHash('sha256').update('AAA').digest('hex');
// const a2 = crypto.createHash('sha256').update('AAA').digest('hex');
// console.log('a1', a1);
// console.log('a2', a2);

const header = {
  version: '0100',
  testFlag: '0',
  activityCode: '1001',
  businessType: '',
  actionCode: '0',
  reqSys: '000000000002',
  reqChannel: '',
  reqTransID: '20150325000000000001',
  reqDate: '20150320',
  reqDateTime: '20150320112600',
  rcvSys: '000000000001',
  rcvTransID: '20150326000000000001',
  rcvDate: '20150320',
  rcvDateTime: '20150320112600',
  authorizationCode: '10151112140001000001542155961605',
};
const body = {
  originalTransKey: 'SDGr4234gG465356gGT44',
  originalGenTime: '20140531124520',
  validPeriod: '0',
  keyType: '0',
};

const mac = 'adjfhuefheiwfh2iu3ehi1iu2y312i3';

const stringToSign = `"header":${JSON.stringify(
  header
)},"body":${JSON.stringify(body)}`;

console.log('stringToSign', stringToSign);
const sign = crypto.createHash('md5').update(stringToSign).digest('hex');

console.log('mac', mac);
console.log('sign', sign);

const stringToMac = `"header":{"version":"0200","testFlag":"1","authorizationCode":"20200730153600088050200514034412","activityCode":"1005","actionCode":"0","reqSys":"shanghaiCA","reqChannel":"01","reqTransID":"20200730153600088050200514034412","reqDate":"20200803","reqDateTime":"20200803132021","rcvSys":null,"rcvTransID":null,"rcvDate":null,"rcvDateTime":null,"rspCode":null,"rspDesc":null,"realUser":"上海市数字证书认证中心有限公司","scene":"05"},"body":"Fgzw0sFf3NrDTrQITaGWyOfVnAZ+iccI62HBYojMtdDXkklMBgsYF/YcfC+68Hpzy/WQJAx8J2g7IMqTmKBtegkh6GGymtGJq6b5Tj6MpGs+mFJRRio93BDjRH3ZF1OeTgt1F/h3CcFqWsbuqLokxK6nJGmcia1nUEarhW8MNK8zD8CErK+S4BahThGOnV/xFqNvi5LK5kp5hXKlw6boV4BKvm6W3eVILoz6zdTTkiuw38vKhS/ME0JkDBQ+CDB1",stoa4CuhoiKzjoFne/etqVjIYStCuw3f2WDqgn7duXA=`;
const signMac = crypto.createHash('md5').update(stringToMac).digest('hex');
console.log('signMac:', signMac);
