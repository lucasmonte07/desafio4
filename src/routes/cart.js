/*
import { Router } from 'express';  
import CartManager from '../controllers/CManager.js'

const cartManager = new CartManager();
const traeTodosC = cartManager.leeTodosC();

const routerCart = Router();

routerCart.get('/', async (req, res) => {    
    let limite = parseInt(req.query.limit);    
    if(!limite) return res.send(await traeTodos);
    let todos = await traeTodos;
    let algunos = todos.slice(0, limite);
    res.send(await algunos);    
}) 

routerCart.get('/:id', async (req, res) => {
    let todos = await traeTodos;
    let queProducto = todos.find(prod => prod.id === parseInt(req.params.id));
    res.send(await queProducto)
})

routerCart.post('/', async (req, res) => {  
    await producto.addProduct(req.body)
    res.send("Producto creado");
})


export default routerCart;
*/