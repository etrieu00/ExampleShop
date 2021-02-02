import express from 'express';
import dotenv from 'dotenv';
import connectMyDB from './utils/mongodbConnecter.js';
import shoppingRoutes from './routes/shoppingRoutes.js';
import CartEvent from './controllers/eventSubscribers.js';

dotenv.config();
const app = express();
connectMyDB();
CartEvent();

const SERVICE_NAME = process.env.SERVICE_NAME || 'Service'
const PORT = process.env.SERVER_PORT || 80;

app.use(express.json());

app.get('/api/v1/shopping/status', (_, res) => {
    res.send(`${SERVICE_NAME} is running...`);
});

app.use('/api/v1/shopping/cart', shoppingRoutes);

app.listen(
    PORT,
    console.log(`${SERVICE_NAME} service is running on ${PORT}`)
);