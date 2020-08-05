const crypto = require('crypto');

function aesWithIVDemo() {
  /**
   * 加密方法
   * @param key 加密key
   * @param iv 向量
   * @param data 需要加密的数据
   * @returns string
   */
  var encrypt = function (key, iv, data) {
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString('base64');
    return crypted;
  };

  /**
   * 解密方法
   * @param key  解密的key
   * @param iv 向量
   * @param crypted  密文
   * @returns string
   */
  var decrypt = function (key, iv, crypted) {
    crypted = new Buffer(crypted, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
  };

  var key = 'a8a27d4dd4c4dadd';
  console.log('加密的key:', key.toString('hex'));
  var iv = 'Xadiapdfaxi0s91D';
  console.log('加密的iv:', iv);
  var data = '6e6dedced14adaa7';
  console.log('需要加密的数据:', data);
  var crypted = encrypt(key, iv, data);
  console.log('数据加密后:', crypted);
  var dec = decrypt(key, iv, crypted);
  console.log('数据解密后:', dec);
}

function main() {
  // 返回支持的加密算法名数组
  // console.log(crypto.getCiphers());
  // 返回支持的哈希算法名数组
  // console.log(crypto.getHashes());
  aesWithIVDemo();
}

main();
