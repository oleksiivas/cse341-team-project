//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const urlLaptops = "";

const mainController = require('../controllers/prove03MainController');
const laptopController = require('../controllers/prove03LaptopsController');
const smartphoneController = require('../controllers/prove03SmartphonesController');

router.get('/', mainController.getMainPage);

router.get('/getLaptops', laptopController.getLaptops);

router.get('/getSmartphones', smartphoneController.getSmartphones);

module.exports = router;