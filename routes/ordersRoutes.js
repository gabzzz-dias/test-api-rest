const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'OK, it works to get orders!'
  });
});

router.get('/:order_id', (req, res, next) => {
  const { order_id } = req.params;

  if (order_id === 'special') {
    res.status(200).send({
      message: 'OK, you discovered a special id!',
      id: order_id
    });
  } else {
    res.status(200).send({
      message: 'OK, you discovered a normal id',
      id: order_id
    });
  }
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    message: 'Created, your new order has been created successfully!'
  });
});

router.put('/', (req, res, next) => {
  res.status(200).send({
    message: 'OK, you have updated something'
  });
});

router.delete('/:order_id', (req, res, next) => {
  const { order_id } = req.params;

  res.status(200).send({
    message: 'OK, this order has been deleted!',
    deleted_product: order_id
  });
});

module.exports = router;