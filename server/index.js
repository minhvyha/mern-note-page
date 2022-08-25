const express = require('express')
const app = express()
app.use(express.json())

const port = 5001

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
})

app.listen(port, () =>{
    console.log('hello, world')
})