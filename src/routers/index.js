const express = require('express');
const app = express();
const router = express.Router();
const routerProductos = require('./productos/ruta.productos')

router.use('/productos', routerProductos)

module.exports = router