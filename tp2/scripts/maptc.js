const fs = require('fs');


function leerAsincronicoThenCatch(){
    let ruta= "./package.json";
    let obj ={}
    fs.promises.readFile(ruta,"utf-8")
        .then(datos=>{
            let contObj = JSON.parse(datos);
            obj.contObj=  contObj;
            obj.contString = JSON.stringify(contObj,null/ "\t");
            return fs.promises.stat(ruta)
        })
        .then(stats=>{
            obj.size=stats.size
            // impresion
            console.log(obj);
            // escribir 
            return fs.promises.writeFile("./leerAsincronicoThenCatch.txt",JSON.stringify(obj))
        })
        .catch(error=>console.log(error))
        
       ;
       

}

console.log("otras operaciones... (demostrando asinconismo)");
leerAsincronicoThenCatch()