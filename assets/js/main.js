import Producto from "./producto.js";

let productoUno = new Producto(1, 'Leche', 1000, 50);
productoUno.aumentarStock(5);
console.log(productoUno.stock);
productoUno.aumentarStock(5);
console.log(productoUno.stock);
productoUno.descontarStock(5);
productoUno.descontarStock(5);
productoUno.descontarStock(5);
productoUno.descontarStock(5);
console.log(productoUno.stock);



