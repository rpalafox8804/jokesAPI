const { get } = require("mongoose");
const Joke = require("../models/joke.model");

module.exports = {
    // CREATE
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err));
    },

    // READ
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err));
    },
    // FIND ONE
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err));
    },
    //UPDATE
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.status(400).json(err));
    },
    // DELETE
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }

}