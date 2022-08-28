const express = require('express')
const app = express()
const cors = require('cors')
const port = 5001
var router = express.Router()

app.use(express.json())
app.use(cors())
app.use("/notes", router)

app.get('/', (req, res) =>{
    res.send('hello world')
})

router.get('/', (req, res) =>{
    const notes = [{
        text: 'website',
        link: 'https://minhvyha.tech'
    },
    {
        text: 'test',
        link: 'https://google.com'
    }]
    res.json({notes})
})

app.listen(port, () =>{
    console.log('hello, world')
})