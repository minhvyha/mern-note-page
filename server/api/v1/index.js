const express = require('express')
var router = express.Router()

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

module.exports = {
    router,
}