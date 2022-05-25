const axios = require('axios');

module.exports = {
    getCharacter: (req, res) => {
        axios.get(`http://gateway.marvel.com/v1/public/characters?name=${hero.value}&ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70`)
        .then(res => {
             res.status(200).send(res.data);
        })
            
    },
    getComics: (req, res) => {

    }

}