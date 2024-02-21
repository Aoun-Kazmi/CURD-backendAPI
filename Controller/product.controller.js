const Product = require('../Models/product.model.js')



//GET ALL PRODUCTS

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//GET SINGLE PRODUCT
const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//UPDATE PRODUCT
const putProduct = async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            res.status(404).json({ message: 'Product not found!' })
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//CREATE PRODUCT
const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            res.status(404).json({ message: 'Product not found!' })
        }
        res.status(200).json({ message: 'Product has been deleted successfully! ' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getProducts,
    getProduct,
    putProduct,
    postProduct,
    deleteProduct
}