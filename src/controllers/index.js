const express = require('express');
const router = express.Router();

const base = require('./base');

router.get('/', base);

// router.use(error.client);
// router.use(error.server);

module.exports = router;
