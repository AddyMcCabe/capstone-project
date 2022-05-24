const express = require('express');
const path = require('path');
const md5 = require('md5');
require('dotenv').config();

const app = express();

console.log(process.env.PRIVATE_KEY);
process.env.PUBLIC_KEY;




app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})






const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`listening on ${port}`);
})