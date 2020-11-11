const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/', (req, res) => {
    db.getCards()
        .then(cards => {
            res.json(cards)
        })
        .catch((err) => {
            res.status(500).json({message: 'There was a problem finding the rules...'} )
        })
})

module.exports = router