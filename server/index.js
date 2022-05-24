const express = require('express');
const path = require('path');
const md5 = require('md5');
require('dotenv').config();

const app = express();

const privateKey = (process.env.PRIVATE_KEY);
const publicKey = (process.env.PUBLIC_KEY);




app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})

app.get('/gateway.marvel.com/v1/public/characters?ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70', (req, res) => {
    console.log(req.query);
})




const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`listening on ${port}`);
})