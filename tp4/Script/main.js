import conexion from "./conexion.js";
import clientes from "./clientes.js"
import productos from "./productos.js"
   
let db = await conexion.conectar()
console.log("clientes")
let clientesArray = await clientes.findClientes(db,conexion.isConected())
console.log("productos")
let productosArray = await productos.agregarCodigoMostrar(db,conexion.isConected())

