import request from 'request';

const reqServerFunc = async () => {
  console.log('Enter ====== ');
  var options = {
    method: 'POST',
    url: 'http://127.0.0.1:3005/etl/qimage',
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
    body: { imgType: 0, rettype: 1 },
  };
  await request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log('response.body', response.body);
  });
};

export default reqServerFunc;
