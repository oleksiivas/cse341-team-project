const fetch = require('node-fetch');
const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

exports.getSmartphones = (req, res, next) => {
    fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    res.render('pages/prove03/prove03Smartphones', { 
        title: 'Prove 03 : Smartphones', 
        path: '/prove03/smartphones', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
        items: jsObject,
    });
    });
}