const express = require('express')
const fs = require('fs')
var cors = require('cors')
const app = express()

app.use(cors({optionSuccessStatus: 200}))
app.use(express.static('public'))


app.get('/featured', (req, res) => {
   const jsonPath = __dirname + '/data/featuredWalls.json'
   res.sendFile(jsonPath)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/walls.html') 
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))