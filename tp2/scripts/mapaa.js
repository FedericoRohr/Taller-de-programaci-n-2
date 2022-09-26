const fs = require('fs');

async function leerAsincronicoAwait(){
    
    try{
        // variables
    let ruta= "./package.json";
    let contObj =JSON.parse( await fs.promises.readFile(ruta,"utf-8"))
    let contString = JSON.stringify(contObj)
    let size =(await fs.promises.stat(ruta)).size;
    
     // construccion del objeto
    let obj = {
    contenidoStr: contString,
    contenidoObj: contObj,
    size: size
    }

    // impresion del objeto
    console.log(obj);

    // escritura del objeto

    await fs.promises.writeFile("./leerAsincronicoAwait.txt",JSON.stringify(obj))

    }catch(error){
        console.log(error);
    }
}

console.log("otras operaciones... (demostrando asinconismo)");
leerAsincronicoAwait()
