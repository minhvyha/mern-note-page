const express = require('express')
const app = express()
const cors = require('cors')
const port = 5001

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello world')
})

app.get('/notes', (req, res) =>{
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