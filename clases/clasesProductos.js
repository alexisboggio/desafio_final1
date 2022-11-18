const fs = require('fs');

class Container{
    constructor(archivo){
        this.archivo = archivo
    }
    async create(archivo, object){
        await fs.promises.writeFile(archivo, "")
        await fs.promises.appendFile(archivo, object)
    }

    async ShowProducts(){
        return await fs.promises.readFile(this.archivo, 'utf-8')
    }
}

const object = JSON.stringify('title: guitarra price: 123.45 thumbnail: https://images.app.goo.gl/zpbEUSRZjdveus3x8 id: 1 , title: violin price: 345.67 thumbnail: https://images.app.goo.gl/yJTLjPWDLbMhdaW5A id: 2 , title: piano price: 234.56 thumbnail: https://images.app.goo.gl/zTLdi9xRgnv6Hjyy9 id: 3')
const productos = new Container('products.txt')
productos.create('products.txt',object)

module.exports = productos