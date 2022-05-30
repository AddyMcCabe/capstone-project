const express = require('express');
const cors = require('cors');
const path = require('path');
const md5 = require('md5');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

const privateKey = (process.env.PRIVATE_KEY);
const publicKey = (process.env.PUBLIC_KEY);
const ts = 1;
const hash = md5(ts, privateKey, publicKey);

const {addRating, getRatings} = require('./controller.js');


app.use(express.static(path.join(__dirname, '../public')));

app.get('/characters', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/characters.html'))
})

app.get('/api/ratings', getRatings);
app.post('/api/ratings', addRating);







const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`listening on ${port}`);
})