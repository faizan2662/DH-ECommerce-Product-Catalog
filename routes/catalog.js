const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to get the product catalog
router.get('/catalog', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => console.log(err));
});

module.exports = router;
