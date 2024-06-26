import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

let ledStatus = 'off';

app.use(express.json());

app.get('/', (req, res) => {
    return "Hello World";
})

app.get('/status', (req, res) => {
    res.json({ status: ledStatus });
});

app.post('/:action', (req, res) => {
    const { action } = req.params;
    if (action === 'turnOn') {
        ledStatus = 'on';
        res.json({ message: 'LED turned on' });
    } else if (action === 'turnOff') {
        ledStatus = 'off';
        res.json({ message: 'LED turned off' });
    } else {
        res.status(400).json({ error: 'Invalid action' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
