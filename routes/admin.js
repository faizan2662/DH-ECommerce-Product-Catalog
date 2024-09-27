const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to get the admin add product form
router.get('/add-product', (req, res) => {
    res.sendFile('add-product.html', { root: './public' });
});

// Route to handle adding a new product
router.post('/add-product', (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    const product = new Product({ name, description, price, imageUrl });
    product.save()
        .then(() => res.redirect('/admin/add-product'))
        .catch(err => console.log(err));
});

// Add more routes for editing and deleting products as needed
module.exports = router;
