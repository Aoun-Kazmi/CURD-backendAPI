const express = require('express')
const Product = require('../Models/product.model')
const router = express.Router()
const {getProducts, getProduct, putProduct, postProduct, deleteProduct} = require('../Controller/product.controller')


router.get('/' , getProducts)
router.get('/:id', getProduct)
router.put('/:id', putProduct)
router.post('/', postProduct)
router.delete('/:id', deleteProduct)




module.exports = router