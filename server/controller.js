const axios = require('axios');
const characterRatings = [];

module.exports = {
    getRatings: (req, res) => {
        res.status(200).send(characterRatings);
    },

    addRating: (req, res) => {
        const {newRating} = req.body;

        characterRatings.push(newRating);
        res.status(200).send('rating added');
    },

}