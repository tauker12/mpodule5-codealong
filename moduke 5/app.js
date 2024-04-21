const express = require('express');

// eexpress app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/',(req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

// redirects
app.get('/about-us', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404, { title: '404'}');
});


