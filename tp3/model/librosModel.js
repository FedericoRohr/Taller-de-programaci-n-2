
const libros = [
    { id: '1', titulo: 'gaturro', autor: "nick", 'año':1999 },
    { id: '2', titulo: 'harry potter', autor:"J K", 'año': 2001},
]

const findlibro = id =>{ return libros.find(libros => libros.id == id)} 

const findlibros = () => {return libros}


const updatelibro = (libro, id)=>{
    libro.id = id
    const index = libros.findIndex(libro =>libro.id == id)
    libros.splice(index,1,libro)
    return libro
}

const deletelibro = id =>{
    const index = libros.findIndex(libro =>libro.id == id)
    return libros.splice(index,1)
}

const saveLibro = (libro) => {
    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)
    libros.push(libro)
    return libro
   
}

export default{
 findlibro, 
 findlibros, 
 updatelibro, 
 deletelibro,
 saveLibro  
}