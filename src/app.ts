import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import config from './config';

const app = express();

app.use(cors({
  origin: config.clientUrl,
}));

app.use(express.json());

app.use('/api', routes);

export default app;
