//TA03 PLACEHOLDER
const { response } = require('express');
const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');
const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

router.get('/',(req, res, next) => {
    fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        res.render('pages/ta03', {
            items: jsObject,
            title: 'Team Activity 03',
            path: '/ta03'
        });
    });
});

module.exports = router;