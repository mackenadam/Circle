const config = require('../../knexfile').development
const db = require('knex')(config)

function getCards() {
    return db('cards')
        .select()
}

module.exports = {
    getCards
}