const express = require('express');
const router = express.Router();
const { updateOrder } = require('./controller');

// Define API routes
router.put('/orders/:id', updateOrder);

module.exports = router;
