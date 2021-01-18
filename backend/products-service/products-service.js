import express from 'express';

const SERVICE_NAME = process.env.SERVICE_NAME || 'Service'
const PORT = process.env.SERVER_PORT || 80;

// connectMyDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`${SERVICE_NAME} is running...`);
});

app.get('/api', (req, res) => {
    res.send('no work?');
});

app.listen(
    PORT,
    console.log(`Product service is running on ${PORT}`)
);