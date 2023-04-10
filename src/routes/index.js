

const routes = require('./v1/index.js');
const express = require('express');
const router = express.Router();
router.use('/v1', routes);

module.exports = router;