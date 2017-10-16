const express = require('express');
const router = express.Router();

// require js file
const base = require('./base');

// require hbs file
router.get('/', base);

// router.use(error.client);
// router.use(error.server);

module.exports = router;
