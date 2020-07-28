import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authFunc from './service/auth';
import reqServerFunc from './service/reqServer';

// 访问白名单
const whiteList = ['192.168.1.1'];
const corsOptions = {
  //To allow requests from client
  origin: (origin: string, callback: any) => {
    if (whiteList.indexOf(origin) > -1 || !origin) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
  methods: 'POST',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

const port = 3008;

app.post('/auth', async (req, res) => {
  await authFunc(req.body);
  res.end('success');
});

app.post('/reqServer', async (req, res) => {
  await reqServerFunc();
  res.end('success');
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
