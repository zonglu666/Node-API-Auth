const CryptoJS = require('crypto-js'); //引用AES源码js

function main() {
  const data =
    'b2da1ae02ba1a222b38e81677bf7ada958c8612b42bb0ddfd960ea827eddb970';
  const key = 'a8a27d4dd4c4dadd';
  const iv = 'Xadiapdfaxi0s91D';

  //解密方法
  function Decrypt(word) {
    let decrypt = CryptoJS.AES.decrypt(word, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    console.log('decryptedStr', decryptedStr.toString());
    return decryptedStr.toString();
  }

  //加密方法
  function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
    });
    return encrypted.ciphertext.toString();
  }

  var encrypted = Encrypt(data);
  var decrypted = Decrypt(data);
  //Hello, this is a secret message!
  console.log('原始数据', data);
  //8a944d97bdabc157a5b7a40cb180e713f901d2eb454220d6aaa1984831e17231f87799ef334e3825123658c80e0e5d0c
  // console.log('加密后数据', encrypted);
  //Hello, this is a secret message!
  console.log('解密数据与原始数据一致否？', decrypted);
}

main();
