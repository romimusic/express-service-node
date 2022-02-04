const express = require('express');
const ProductsService = require('./../sevices/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.findIt();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('hi, I am a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  if ( !product ) {
    res.status(404).json({
      message: 'not found'
    });
  } else {
    res.status(200).json( product )
  }

});

//create product
router.post( '/' , ( req, res ) => {
  const body = req.body;
  const newProduct = service.create( body );
  res.status(201).json( newProduct );
});

//modify product
router.patch( '/:id', ( req, res ) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update( id, body );
  res.json(product)
});

//delete product
router.delete( '/:id', ( req, res ) => {
  const { id } = req.params;
  const product = service.delete( id );
  res.json(product);
})

module.exports = router;
