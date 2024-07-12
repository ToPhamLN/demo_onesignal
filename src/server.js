import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import notificationRoutes from './routes/notification.routes.js';
import { notFound, errorHandler } from './middlewares/error.middlewares.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));

app.use('/api/notifications', notificationRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`[server]: Server is running on port: http://localhost:${port}`));
