import * as metodos from "./index.js"

console.log(metodos.leerArchivo("./Archivos/Archivo1.txt"));
metodos.escribirTextoEnArchivo("./Archivos/Archivo1.txt","reescribir1",true);
metodos.escribirTextoEnArchivo("./Archivos/Archivo1.txt","reescribir1",false);
metodos.escribirTextoEnArchivo("./Archivos/Archivo3.txt","reescribir2",true);
metodos.escribirTextoEnArchivo("./Archivos/Archivo3.txt","reescribir2",false);
console.log(metodos.transformarStringEnArrayDeNumeros( "123 | 456 | 789 | 1bc | 10","|"));
console.log(metodos.transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10],","));
console.log(metodos.combinarDosArrays([1, 5, 10],[2, 3, 8, 11]));
console.log(metodos.combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]));


