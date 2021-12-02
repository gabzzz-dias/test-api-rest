const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'OK, it works to get products!'
  });
});

router.get('/:product_id', (req, res, next) => {
  const { product_id } = req.params;

  if (product_id === 'special') {
    res.status(200).send({
      message: 'OK, you discovered a special id!',
      id: product_id
    });
  } else {
    res.status(200).send({
      message: 'OK, you discovered a normal id',
      id: product_id
    });
  }
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    message: 'Created, your new product has been created successfully!'
  });
});

router.put('/', (req, res, next) => {
  res.status(200).send({
    message: 'OK, you have updated something'
  });
});

router.delete('/:product_id', (req, res, next) => {
  const { product_id } = req.params;

  res.status(200).send({
    message: 'OK, this product has been deleted!',
    deleted_product: product_id
  });
});

module.exports = router;