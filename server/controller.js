const axios = require('axios');
const ratings = [];

module.exports = {
    createRating: (req, res) => {
        let {rating} = req.body;

        let newRating = {
            rating: rating
        }
        ratings.push(newRating);
        res.status(200).send(ratings);
    },
}