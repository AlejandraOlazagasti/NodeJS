const express = require('express');
const app = express();

app.use(express.json());

app.get('/me', (req, res) => {
    res.json({ name: 'Alejandra', age: 32, country: 'México' });
});

app.post('/metas', (req, res) => {
    res.json(['Programming', 'Games', 'Swimming']);
});

app.patch('/metas', (req, res) => {
    res.json(['I wanna travel around the World', 'I wanna learn a new languaje']);
});

app.put('/business', (req, res) => {
    res.json(['Google', 'Academlo', 'Twitter']);
});

app.listen(4000, () => console.log('Is listening at 4000'));