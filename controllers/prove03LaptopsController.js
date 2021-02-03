const fetch = require('node-fetch');
const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";
const Laptop = require('../models/laptop');

exports.getLaptops = (req, res, next) => {
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
}