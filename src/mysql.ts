import mysql from 'mysql';

async function query() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_sheca_etl',
  });
  connection.connect();

  var sql = 'SELECT * FROM t_cert';
  //查
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log(
      '------------------------------------------------------------\n\n'
    );
  });

  connection.end();
}

async function main() {
  await query();
}

main();
