const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const ProductsController = require('../controllers/products_controller');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    // console.log(file);
    // cb(null, file.originalname);
    cb(null, Date.now() + file.originalname );
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    //accept a file
    cb(null, true);
  } else {
    //reject a file
    cb(null, false);
    console.log('Your file has not been saved. Only .png and .jpeg files are accepted.')
  }
}

// const upload = multer({dest: 'uploads/'});
const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


const Product = require('../models/product');

router.get("/", ProductsController.products_get_all);

router.post("/", checkAuth, upload.single('productImage'), ProductsController.product_create);

router.get("/:productId", ProductsController.product_get);

router.patch('/:productId', checkAuth, ProductsController.product_edit);

router.delete('/:productId', checkAuth, ProductsController.product_delete);

module.exports = router;