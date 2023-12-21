const express = require('express');
const router = express.Router();

// const path = require('path');


//Routes
router.get('/', (req, res) => {

    const locals = {
        title: 'NodeJS Blog Website',
        description: 'This is a `NodeJS` blog website built with `Express` and `EJS`'
    }

    res.render('index', locals);
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;

