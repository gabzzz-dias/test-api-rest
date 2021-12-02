const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;