import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from 'config';
import logger from './shared/logger.ts';
import routes_v1 from './routes/index.ts';

const app: Express = express();

const PORT = config.get<number>('PORT');

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/v1', routes_v1);

app.listen(PORT, () => {
	logger.info('server running at http://localhost:3000');
});
