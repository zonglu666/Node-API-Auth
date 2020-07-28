function getConfig() {
  const publicKeyForSHCA = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtTKP4B98/pwINxosWfB/
466cJqWsRUShKAMiRAtIKtCC6z42EP21gBnl6Zn0zUIiM7fX7J4fAnH5QDSKkWPT
4EXqPeNyR54KFkxQw2WnbeaZnpNXixYqjfjukryS8cPBVjz/7Cc+rLwc6SWAcyaK
A9HCcvnhVaXJhxSbKRxnW354j4u21QOfegs6l+kxTst5u0wB+eLwjV8oGlCJtgkQ
DU/OBX9mXQJWNtPHwwnaD5Am/ydYtZKBK38fLb5G1tZwIA7/GNooAAvwIYylKXOY
Idm3USyGfTF8q9RixL43qdI43gVd/ftae4auYeh6lX0AAWYo6Sbay0UXENCWUjq7
KwIDAQAB
-----END PUBLIC KEY-----`;
  const privateKeyForSHCA = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1Mo/gH3z+nAg3
GixZ8H/jrpwmpaxFRKEoAyJEC0gq0ILrPjYQ/bWAGeXpmfTNQiIzt9fsnh8CcflA
NIqRY9PgReo943JHngoWTFDDZadt5pmek1eLFiqN+O6SvJLxw8FWPP/sJz6svBzp
JYBzJooD0cJy+eFVpcmHFJspHGdbfniPi7bVA596CzqX6TFOy3m7TAH54vCNXyga
UIm2CRANT84Ff2ZdAlY208fDCdoPkCb/J1i1koErfx8tvkbW1nAgDv8Y2igAC/Ah
jKUpc5gh2bdRLIZ9MXyr1GLEvjep0jjeBV39+1p7hq5h6HqVfQABZijpJtrLRRcQ
0JZSOrsrAgMBAAECggEBALGGnUG3eA44LzBVW1iu8Y3P2DthHBwtdjsuftbtusH/
0hTKucwB1l5wgTpS1W54ueuz1kCEVttdcRe/ond5t+9GcI48Fg4mv7lDAem+4cAi
KyYbM60YhY7dclifmtR1tylX0GG9vYEdOLIQRP4MpzHAxGNDgMsaCA1pWe94Xadb
4bRlpbfbkd9Vw6fryIDNi6wxmZwIrvTYX6d689DA+ukOwEeIxWwwFX6q8V/asMjD
4QzOwOlChJ/vd2xNzCmTCrmSQZHTUoeyj9XINv9eKl6NQwfRmajbtL3vXCI+pfua
+f34dA6L75IlZCAo7qtVyfk8L+GM4QQnlCGB3Ff8hHkCgYEA+sTv2lOGLUlUwcJl
aWVwTUklFOzjtri7WEDRGtj2nys2mJGlyvPptpH1Q6+stN2ym5phGSLWUQhnNTrS
4VGh6gZE3jB0SrU/d+1IriD6j3vFnC268sETMhE7jqfSYif1xBZI2Ewc3TyfV+rr
itu/jfjqG86yLP7MG/k6Dbh4kqUCgYEAuPofz1vV+VpwHy0UPU1GDoI6/0nmol38
bbPj4kON3wgGI0JBeuOO6RzziP0IUuAzkX2xnei4eP5MFgelnlpumdmMJHS1SJ0W
8LKCT20VZW5OX5cw7yylOGuzpAcPvWamcjeAbCJfrMYwpTCDkcd+R0rpN91gTqIj
9A8LQMaZvY8CgYAlyBojGMZ0eEHu120UDhZ3bnfJyU8droN7bniSxPGTVZ1qKzeB
dnJV8XO0ePlaXrSUQRQ0B02m888o8+3lyLjOW5dwqng68UfYt8Vlhs55Y7qIJ1Ot
U22i83m3qo1GAKNEod7jx8PpiUKwqlJGn4kiyMfs3J13rgPuiwQ2IP75iQKBgQCN
2jKewBx9Vp95KQbGZAX/hltb/v5BMbYtIrD1iTy49txOGbdBWFT169/PA8xoUcr6
Hdwh7p/ZGZqbok2d/Feo4C4anu2Ou/klqJ9J7atk14x+veEm6aPieqWOemPVqWyn
VmzDgDDCvFH9vBCJsOTkI0xqLPh4FNthhE/q4uJvfQKBgA0274oganMCnHHn7vkT
lLpidNr1N/5hpgneWR2u32etNm/20oNYVwr5R+HXXCx9tXWgovhOk/JMNq5cdCk/
YtgMz5lmHzEhXwNVQfm1GlSjIlc04KRKN/yyxKHHM7AW0zYv1eszHjNC6HVmQX1y
HkG5Lv//d43z1jSlrxzk+DKt
-----END PRIVATE KEY-----`;
  const publicKeyForClient = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsjAMC4j5fqUbvDdxKJGL
+aBYHhWrrblwRAGQoXghhb4AtCc0x320vYnL6QUO8zXbupMy84TWCwIMyxlXYdOa
9naVsPrCPFa7i3istjtl/Q3xM5GFJ98uf/lmR+Eq/CBeXg9bD4Wr2pnXsDjDYkp6
D4w7a24GJaHm6SrZCESA+oAYCJxxQx/uApRwwxElXqQCM2U+BzlkK1j9pIa7foWA
TxWN5gTb6MgPS3Azqv/V5K6We8tVni/OqGI2RY3gXc/6S5FQmrC4roOO7u0jpY8O
GfYO4Czdcw+D8ZAlPbS1DwzDo3pNubCRI6NU99l1SxJIo1H+zefit2W0ToANd3w6
cQIDAQAB
-----END PUBLIC KEY-----`;
  const privateKeyForClient = `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyMAwLiPl+pRu8\nN3EokYv5oFgeFautuXBEAZCheCGFvgC0JzTHfbS9icvpBQ7zNdu6kzLzhNYLAgzL\nGVdh05r2dpWw+sI8VruLeKy2O2X9DfEzkYUn3y5/+WZH4Sr8IF5eD1sPhavamdew\nOMNiSnoPjDtrbgYloebpKtkIRID6gBgInHFDH+4ClHDDESVepAIzZT4HOWQrWP2k\nhrt+hYBPFY3mBNvoyA9LcDOq/9XkrpZ7y1WeL86oYjZFjeBdz/pLkVCasLiug47u\n7SOljw4Z9g7gLN1zD4PxkCU9tLUPDMOjek25sJEjo1T32XVLEkijUf7N5+K3ZbRO\ngA13fDpxAgMBAAECggEBAKYxI/raPYF+c1jgCP3CimA/yg/9PEtiyq/TGddQGUwJ\nQ9TDQHnT5/BkBjiGzEPQ9uiUhBAW1CAeQFppf1OxrjWzsrgHmYP3jSJvYf7xdZVJ\nHK9xSVU/1rnrnhbqj1HqyrlF7zOSBBB2LnKg7rLNLf00WPNBAiC1WY4dtaD9a6K2\nqHnDsVNJMROeosDYc9e359i3NOeaIYELy0sRymHNgaGbQTlplma3vWJibXLPClQR\n3UJi/wSoqDGDqc/+llKt8or6B0eNgL8tVqEmeIcCm8s38rag5XYJM0BjgHXTFN1Q\n/WrX4Zrr4LwZ5uNVCCkGVY+Ke8fJZ/da9dv2n3m9B0ECgYEA565MAu4b00+VK9Fj\nohnS33h/gt3NzXbE4TcyRa7JN35CETLNJ6C9hreyjHKorEUOEGizZvZhTD3QA8x9\nbNi8DBGgj8OSYq4yAgHvP/ShN7zWqwgkRPX++gyBeD6VZIpuagTGX+uMwQ60p2Te\nVMtdb1O19NnJwG0WHgLdwFfPUzkCgYEAxORJm65tK63AKBxjN2vAPQQzwOePxyg/\n4LV+0kMcXe17WkVRQtLNToIPLiLD7H41hhYKdiSrRWPkP/OnUs0MxakLkaEROc7b\nNQGcCxQcq4HbnRfkSuDfoe6lH2taqFZj9t9oiU62t6krOdrZikp/jWbHM1O7bc2t\nJjNBysmOiPkCgYBStDq4NQ3D0j37BWVewX8wfRBvxAQqm4JOr2iHzYxQ/gZRo2Pv\nCId/puXbEzc5P/F0VBvu3nb/Q3WVVZNUns4KNOSvTW5dQbfiVZR1rTs77XJoXaCs\n6W/bDUnOhfDIkk42FHxIU4rMhBZjRzPC61HwYt6qiHBn+8kQb49/kRkWqQKBgQCV\n9v9tuZxjYXLz2jNj2glRMCsvKfCkE68bu4G+KumnTSPgLN3pFODVhFCFpmsubS7d\nU1pihCmDr8MBRtdSROYOg2RRZqnVKw5hwDkXYxk3NLCOZc03jzImh7tzQ/SINUzs\nk1tvAeo/13UaGuwI3hdrHzZojMU8rCTO7MmW6JBNGQKBgEEQS9Wl55CWO4uOBEsx\n1cTRsG1fITU9m47E6FI5lat4kl5hS9u0AFFux58OQrNV/Y6SVMexKJFQ/hMwHUqj\nkyf0ul+smzqYE76hP1TJOvG+XqTQLpVpUjCZ1ZgJC1QhNhZMMHuy3v+0g5r/E9Ty\nI5kZ0MZ1vgBNdH3WSwx9tN6a\n-----END PRIVATE KEY-----`;

  const httpRequestMethod = 'POST';
  const canonicalURI = '/';
  const canonicalQueryString = '';
  const host = '192.168.1.1';
  const canonicalHeaders = `content-type:application/json; charset=utf-8\nhost:${host}\n`;
  const signedHeaders = 'content-type;host';

  return {
    publicKeyForSHCA,
    privateKeyForSHCA,
    publicKeyForClient,
    privateKeyForClient,
    httpRequestMethod,
    canonicalURI,
    canonicalQueryString,
    host,
    canonicalHeaders,
    signedHeaders,
  };
}

export default getConfig();
