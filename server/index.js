require('dotenv').config()

const express = require('express')
const bodyParser =  require('body-parser')
const ctrl = require ('./controller.js')
const massive = require('massive')

const app = express()

app.use(bodyParser.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})

app.get('/api/inventory', ctrl.getInventory)

app.post('/api/product', ctrl.createInventory)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));