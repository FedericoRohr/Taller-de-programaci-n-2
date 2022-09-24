import fs from "fs"

//-------------------------Leer archivo como String ------------------------------------//
const leerArchivo= function(ruta){
    const leer =fs.readFileSync(ruta,"utf-8")
    return leer; 
}

//-------------------------EscribirTextoEnArchivo --------------------------------------//

const escribirTextoEnArchivo= function(ruta,texto,flag){
    var escribir=true;
try{
    fs.readFileSync(ruta)
}catch(e){
escribir=flag;
}
if(escribir){
    fs.writeFileSync(ruta,texto);
}else{
    throw "el archivo no existe";
}

}
//-------------------------transformarStringEnArrayDeNumeros --------------------------------------//

const transformarStringEnArrayDeNumeros = function (string,separador){
return string.split(separador).map(elemento=>Number(elemento)).filter(elemento=>!isNaN(elemento));
}

//-------------------------transformarArrayDeNumerosAUnSoloString--------------------------------------//

const transformarArrayDeNumerosAUnSoloString = function(array,separador){
   return array.join(separador);
}

//-------------------------combinarDosArrays--------------------------------------//
const combinarDosArrays= function(array1,array2){
    var cantVueltas = array1.length + array2.length
    const arrayOrdenado = [];
    for(var i =0 ; i<cantVueltas ;i++){
        if(array1[0]<array2[0]){
         arrayOrdenado.push(array1.shift());
        }else{
            arrayOrdenado.push(array2.shift());
        }
    }
    console.log(arrayOrdenado);
    return arrayOrdenado;
}

//-------------------------combinarNArrays--------------------------------------//

const combinarNArrays= function(array){
    const arrayDevolver = [];
    let cantArray = array.length;
    let cantTotal=calcularTotales(array);
    let num=Number.MAX_SAFE_INTEGER;
    let posArray=0;
    console.log(cantTotal);
    for(var i =0 ; i<cantTotal ;i++){
         for(var j=0;j<cantArray;j++){
            if(num>array[j][0]){
                num=array[j][0];
                posArray=j;
            }
        }
        arrayDevolver.push(array[posArray].shift())
        num=Number.MAX_SAFE_INTEGER;
    }
    return arrayDevolver;
    
}

function calcularTotales(array){
let cantTotal =0;
 for (var i =0; i<array.length ; i++){
    cantTotal+= array[i].length;
}
return cantTotal
}

export {
    leerArchivo,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays
}

//leerArchivo("./Archivos/Archivo1.txt");
//escribirTextoEnArchivo("./Archivos/Archivo3.txt","reescribir2",true);
//transformarStringEnArrayDeNumeros( "123 | 456 | 789 | 1bc | 10","|");
//transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10],",");
//combinarDosArrays([1, 5, 10],[2, 3, 8, 11]);
//combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]);

