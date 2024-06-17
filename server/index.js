import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const ESP32_IP = 'http://your_esp32_local_ip'; // Replace with your ESP32 IP

app.get('/', (req, res) => {
    res.send('Hello from Cloud Server!');
});

app.post('/pump/:action', async (req, res) => {
    const action = req.params.action;
    try {
        const response = await fetch(`${ESP32_IP}/pump/${action}`);
        const text = await response.text();
        res.send(text);
    } catch (error) {
        res.status(500).send('Error communicating with ESP32');
    }
});

app.post('/fan/:action', async (req, res) => {
    const action = req.params.action;
    try {
        const response = await fetch(`${ESP32_IP}/fan/${action}`);
        const text = await response.text();
        res.send(text);
    } catch (error) {
        res.status(500).send('Error communicating with ESP32');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
