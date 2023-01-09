import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Routes
import routes from './routes/router.js';

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);

export default app;
