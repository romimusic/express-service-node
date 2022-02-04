const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get( '/', ( req, res ) => {
  res.json([
    {
      categorie: faker.commerce.productAdjective()
    },
    {
      categorie: faker.commerce.productAdjective()
    }
  ])
});

router.get( '/:id', ( req, res ) => {
  const { id } = req.params;
  res.json({
    id,
    categorie: faker.commerce.productAdjective()
  });
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.post( '/', ( req, res ) => {
  const body = req.body;
  res.json({
    message: "created",
    data: body,
  })
})

module.exports = router;
