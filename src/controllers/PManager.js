
import { promises as fs } from 'fs';

export default class ProductManager {

    constructor() {
        this.file = "./src/models/productos.txt";
        this.products = [];
    }
     
    static id = 1;

    addProduct = async ({ title, description, code, price, status, stock, category, thumbnail }) => {
        const nuevoIngreso = { title, description, code, price, status, stock, category, thumbnail };
        this.products.push({ ...nuevoIngreso, id: ProductManager.id });
        ProductManager.id++;
        await fs.writeFile(this.file, JSON.stringify(this.products));
    };

    leeTodos = async () => {
        let leeTodo = await fs.readFile(this.file, "utf-8");
        return JSON.parse(leeTodo);
    };

    getProduct = async () => {
        let resultado = await this.leeTodos();
        return console.log(resultado);
    };

    getProductById = async (id) => {
        let resultado = await fs.readFile(this.file, "utf-8");
        let caso = JSON.parse(resultado);
        if (caso.find(products => products.id === id)) {
            console.log(caso.find(products => products.id === id));
        }
        else {
            console.log("El Producto especificado no se encuentra en la base");
        }
    };

    deleteProductById = async (id) => {
        let resultado8 = await fs.readFile(this.file, "utf-8");
        let caso = JSON.parse(resultado8);
        let quedan = caso.filter(products => products.id != id);
        await fs.writeFile(this.file, JSON.stringify(quedan));
        console.log("El producto, ha sido eliminado");
    };

    updateProductById = async (id, { title, description, code, price, status, stock, category, thumbnail }) => {
        let todas = await this.leeTodos();
        if (todas.some(pr => pr.id == id)) {
            let indice = todas.findIndex(pro => pro.id == id);
            todas[indice].title = title;
            todas[indice].description = description;
            todas[indice].code = code;
            todas[indice].price = price;
            todas[indice].status = status;
            todas[indice].stock = stock;
            todas[indice].category = category;
            todas[indice].thumbnail = thumbnail;            
            await fs.writeFile(this.file, JSON.stringify(todas));
            return console.log("producto modificado");
        }
        else {
            return console.log("producto no encontrado");
        }
    };
}