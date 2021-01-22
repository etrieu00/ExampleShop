import express from 'express';
import connectMyDB from './database/db.js';
import productsRoutes from './routes/productsRoutes.js';
import {
    populatePseudoData,
    destroyPseudoData,
} from './data/seedData.js';
const SERVICE_NAME = process.env.SERVICE_NAME || 'Service'
const PORT = process.env.SERVER_PORT || 80;

connectMyDB();

const app = express();
app.use(express.json());

app.post('/api/v1/products/seed', (req, res) => {
    populatePseudoData();
    res.send('Database populated')
});

app.delete('/api/v1/products/seed', (req, res) => {
    destroyPseudoData();
    res.send('Data destroyed');
});

app.get('/api/v1/products/status', (req, res) => {
    res.send(`${SERVICE_NAME} is running...`);
});

app.use('/api/v1/products', productsRoutes);

app.listen(
    PORT,
    console.log(`Product service is running on ${PORT}`)
);