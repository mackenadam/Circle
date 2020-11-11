const path = require('path')
const express = require('express')

const rules = require('./routes/rules')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/rules', rules)

module.exports = server
