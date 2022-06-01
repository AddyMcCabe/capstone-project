const axios = require('axios');
const characterRatings = [];

module.exports = {
    getRatings: (req, res) => {
        res.status(200).send(characterRatings);
    },
    
    addRating: (req, res) => {
        const {rating} = req.body;
    
                characterRatings.push(rating);
                res.status(200).send('rating added');
    },

}