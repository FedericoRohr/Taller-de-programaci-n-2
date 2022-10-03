import service from '../service/librosService.js'


const getLibros = (req,res) => {
    const { id } = req.params
    res.json( service.obtenerLibro(id))
}

const postLibros = (req,res) => {
    const libro= req.body
    res.json(service.guardarLibro(libro))
}

const putLibros = (req,res)=>{
    const {id} = req.params
    const libro = req.body
    res.json(service.ActualizarLibro(libro,id))
}

const deleteLibros = (req,res)=>{
    const {id} = req.params
    res.json(service.borrarLibro(id))
}


export default{
    getLibros,
    postLibros,
    putLibros,
    deleteLibros
}