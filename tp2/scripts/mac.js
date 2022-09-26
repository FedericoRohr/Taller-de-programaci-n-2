const fs = require('fs')

function leerAsincornicoAnidado(){
    // variables
    let ruta= "./package.json";
    fs.readFile(ruta,"utf-8",(error,data)=>{
        if (error) { throw new Error(error)}
          let contObj=JSON.parse(data);
          let contString = JSON.stringify(contObj,null/ "\t");
          
         
          fs.stat(ruta,(error,data)=>{
            if (error) { throw new Error(error)}
            let size = data.size;
           
            // construccion del objeto 
            let obj = {
                contenidoStr: contString,
                contenidoObj: contObj,
                size: size
               }

               // impresion
               console.log(obj);

               // escritura de archivo

               fs.writeFile("./leerAsincronicoAnidado.txt",JSON.stringify(obj),(error)=>{
                if (error) { throw new Error(error)}
               })
        })
     })    
}
console.log("otras operaciones... (demostrando asinconismo)");
leerAsincornicoAnidado()