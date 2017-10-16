// file la endpoints

const express = require('express');
const router = express.Router();

// require js file
const base = require('./base');
const generalGuidelines = require('./generalGuidelines');
const balloonInstructions = require('./balloonInstructions');
const result = require('./result');
const hanoiInstructions = require('./hanoiInstructions');
const hanoiResult = require('./hanoiResult');
const traits = require('./traits');
const degree = require('./degree');

// require hbs file
router.get('/', base);
router.get('/generalGuidelines', generalGuidelines);
router.get('/balloonInstructions', balloonInstructions);
router.get('/result', result);
router.get('/hanoiInstructions', hanoiInstructions);
router.get('/hanoiResult', hanoiResult);
router.get('/traits', traits);
router.get('/degree', degree);

// router.use(error.client);
// router.use(error.server);

module.exports = router;
