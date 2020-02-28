var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
const port = 3000;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on localhost: ${port}`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})