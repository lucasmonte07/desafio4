/*
import { promises as fs } from 'fs';

export default class CartManager {

    constructor() {
        this.cfile = "./src/models/carrito.txt";
        this.cart = [];
    }
     
    static idc = 1;

    addProductCart = async ({ id, product, quantity }) => {
        const nvoIngreso = { id, product, quantity };
        this.cart.push({ ...nvoIngreso, id: CartManager.idc });
        CartManager.idc++;
        await fs.writeFile(this.cfile, JSON.stringify(this.cart));
    };

    leeTodosCart = async () => {
        let leeTodoC = await fs.readFile(this.Cfile, "utf-8");
        return JSON.parse(leeTodoC);
    };

    getProductCart = async () => {
        let resultadoC = await this.leeTodosC();
        return console.log(resultadoC);
    };

}
*/