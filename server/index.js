import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

let ledStatus = 'off';

app.use(express.json());

app.get('/status', (req, res) => {
    res.json({ status: ledStatus });
});

app.post('/control', (req, res) => {
    const { status } = req.body;
    if (status === 'on' || status === 'off') {
        ledStatus = status;
        res.json({ message: `LED turned ${status}` });
    } else {
        res.status(400).json({ error: 'Invalid status' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
