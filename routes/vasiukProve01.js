const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01Form', { 
        title: 'Prove Assignment 1', 
        path: '/prove01Form', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/',(req, res, next) => {
    res.render('pages/prove01DisplayOutput', { 
        title: 'Prove Assignment 1 Display', 
        path: '/prove01Form', // For pug, EJS
        data1: req.body.input1,
        data2: req.body.input2,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;