const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 3000;
const fetch = require('node-fetch')
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/nefturian/:id', async (req, res) => {
    let hex = req.params.id
    const hash = crypto.createHash('sha256').update(hex).digest('hex');

    const number = parseInt(hash, 16);

    const randomNumber = number % 1240;
    const nefturians_data = await fetch(`https://api.nefturians.io/metadata/` + randomNumber);
    const data = await nefturians_data.json();
    res.send(data);
})

app.listen(port, () => {
    console.log(`App listening port ${port}!`);
})
