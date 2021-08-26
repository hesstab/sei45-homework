const express = require('express');
const ejs = require('ejs');
const axios = require ('axios');

const server = express();
server.use(express.static('public')); // for css -> make the public folder "online"
const PORT = 1337;

server.get('/', (req, res) => {
    res.render('home.ejs');
});


server.get('/info', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${ req.query.title }`).then((result) => {
        res.render('info.ejs', { bookCover: result.data.items[0].volumeInfo.imageLinks.thumbnail });
    });
});


server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
