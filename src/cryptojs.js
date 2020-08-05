const CryptoJS = require('crypto-js');

const transKey = 'stoa4CuhoiKzjoFne/etqVjIYStCuw3f2WDqgn7duXA=';

function aes() {
  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt('my message', transKey).toString();

  // Decrypt
  var bytes = CryptoJS.AES.decrypt(
    'U2FsdGVkX18tKvEMAwf8cYBCyIo02wnaekxpoBHDfavGsJO289IgXPeQnJlR1nI9sGEpc7PtadpIAZ0gPqtUArTimS6B5TML/oBo6ZWhMAOyGt8KQ3Bz0iedtyexiDYGXHQF94WntG0OB6fQ8mGh56IR+mS+AdMjKbRhvKlOqq4AjZrO1UPszk4qUKAbwmRjLa78o22trsclgOSH2ZxKUHN1u7HOnr6atIi1dwZumZdv8ynOpr6eW1YZkr9fGP4O7coYeCwABtnSQt9dZmSR3A==',
    transKey
  );

  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  console.log(originalText); // 'my message'
}
function main() {
  // aes 加密
}
