import express from 'express';
import dotenv from 'dotenv';
import connectMyDB from './database/db.js';
import authRoutes from './routes/authenticationRoutes.js';

dotenv.config();
const app = express();
connectMyDB();

const SERVICE_NAME = process.env.SERVICE_NAME || 'Service'
const PORT = process.env.SERVER_PORT || 80;

app.use(express.json());

app.get('/api/v1/users/status', (_, res) => {
    res.send(`${SERVICE_NAME} is running...`);
});

app.use('/api/v1/users/', authRoutes);

app.listen(
    PORT,
    console.log(`${SERVICE_NAME} service is running on ${PORT}`)
);