const fs = require('fs')

function leerSincornico(){
    // variables
    try{
        let ruta= "./package.json";
    let contObj = JSON.parse(fs.readFileSync(ruta,"utf-8"))
    let contString = JSON.stringify(contObj,null/ "\t")
    let size = fs.statSync(ruta).size;

    // construccion del objeto
   let obj = {
    contenidoStr: contString,
    contenidoObj: contObj,
    size: size
   }
    // impresion
    console.log(obj)

    // escritura de archivo
    fs.writeFileSync("./leerSincronico.txt",JSON.stringify(obj))
     
    

    }catch(e){
        console.log(e);
    }
}

leerSincornico();

