import express from 'express';
import cors from 'cors';

// 访问白名单
const whiteList = ['localhost'];
const corsOptions = {
  //To allow requests from client
  origin: (origin: string, callback: any) => {
    if (whiteList.indexOf(origin) > -1) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
  methods: 'POST',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  exposedHeaders: ['set-cookie'],
};

const app = express();
app.use(cors(corsOptions));

const port = 3008;

app.post('/auth', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
