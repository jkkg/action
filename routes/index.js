const express = require('express');
const router = express.Router();
const productsController = require('../controllers').products;
const adminController = require('../controllers').admin;


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'Express' });
});

// router.get('/products', productsController.list);
// router.get('/products/:productId', productsController.retrieve);
// router.post('/products', productsController.create);
// router.put('/products/:productId', productsController.update);
// router.delete('/products/:productId', productsController.destroy);

router.get('/admin', adminController.main);
router.get('/admin/products/list', adminController.showProducts);
router.get('/admin/products/show/:productId', adminController.showOneProduct);
router.get('/admin/products/create', adminController.createProductForm);
router.post('/admin/products/create', adminController.createProduct);

module.exports = router;
