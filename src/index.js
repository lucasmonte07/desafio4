import express from 'express';
import routerProd from './routes/products.js'
//import routerCart from './routes/cart.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use('/productos', routerProd)
//app.use('/cart', routerCart)

app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})