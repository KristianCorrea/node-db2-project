const express = require('express')

const db = require('../data/connection');

const router = express.Router();

router.get("/", (req, res) => {
    db.select("*").from("cars")
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({ error: "Could not retrieve cars"})
        })
})

router.post("/", (req, res) => {
    let newCar = req.body;
    db("cars").insert(newCar)
        .then(newCarID => {
            res.status(200).json({ message: "Car successfully created", newCarID: newCarID[0]})
        })
        .catch(error => {
            res.status(500).json({ error: "Could not create new car"})
        })
})

module.exports = router;