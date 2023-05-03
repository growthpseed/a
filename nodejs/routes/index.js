const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.get('/register', (req, res) => {
    res.render('register.ejs');
})

router.post('/login', (req, res) => {
    return res.redirect('/');
})

router.post('/register', (req, res) => {
    return res.redirect('register.ejs');
})

router.post('/register', (req, res) => {
    return res.redirect('/login');
})
module.exports=router;
