import express from 'express';
import connectMyDB from './database/db.js';
import catalogRoutes from './routes/catalogRoutes.js';
import {
    populatePseudoData,
    destroyPseudoData,
} from './data/seedData.js';

const SERVICE_NAME = process.env.SERVICE_NAME || 'Unknown'
const PORT = process.env.SERVER_PORT || 80;

connectMyDB();

const app = express();
app.use(express.json());

app.post('/api/v1/catalog/seed', (_, res) => {
    populatePseudoData();
    res.send('Database populated')
});

app.delete('/api/v1/catalog/seed', (_, res) => {
    destroyPseudoData();
    res.send('Data destroyed');
});

app.get('/api/v1/catalog/status', (_, res) => {
    res.send(`${SERVICE_NAME} is running...`);
});

app.use('/api/v1/catalog', catalogRoutes);

app.listen(
    PORT,
    console.log(`${SERVICE_NAME} service is running on ${PORT}`)
);