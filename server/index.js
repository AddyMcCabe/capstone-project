const express = require('express');
const cors = require('cors');
const path = require('path');
const md5 = require('md5');
require('dotenv').config();

const app = express();

const privateKey = (process.env.PRIVATE_KEY);
const publicKey = (process.env.PUBLIC_KEY);
const ts = 1;
const hash = md5(ts, privateKey, publicKey)




app.use(express.static(path.join(__dirname, '../public')));

app.get('/characters', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/characters.html'))
})








const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`listening on ${port}`);
})