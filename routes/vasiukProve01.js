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
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.pnumber,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;