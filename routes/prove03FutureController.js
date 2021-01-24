//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

router.get('/',(req, res, next) => {
    res.render('pages/prove03/prove03MainPage', { 
        title: 'Prove 03 : Best Buy', 
        path: '/prove03', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.get('/getLaptops',(req, res, next) => {
    fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    res.render('pages/prove03/prove03Laptops', { 
        title: 'Prove 03 : Laptops', 
        path: '/prove03/laptops', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
        items: jsObject,
    });
    });
});

router.get('/getSmartphones',(req, res, next) => {
    res.render('pages/prove03/prove03Smartphones', { 
        title: 'Prove 03 : Smartphones', 
        path: '/prove03/smartphones', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;