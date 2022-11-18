const express = require('express');
const app = express();
const router = express.Router();
const productos = require('../../../clases/clasesProductos')

router.get('/ver',(_req, res) => {
    try{
        const productObject = productos.ShowProducts()
        productObject = JSON.parse(productObject)
        res.render('products.ejs', {product: productObject})
    }catch(err){
        console.error(err)
    }
})

router.get('/:id', (req_res) => {
    try{
        const { id } = req.params
        res.render('index.ejs', {product: productos.ShowProducts()})
    }catch(err){
        console.error(err)
    }
})

module.exports = router