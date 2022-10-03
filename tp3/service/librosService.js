import model from '../model/librosModel.js'

const obtenerLibro = id =>{
    return id?model.findlibro(id) : model.findlibros()

}

const guardarLibro = libro =>{
    return model.saveLibro(libro)
}

const ActualizarLibro = (libro,id)=>{
    return model.updatelibro(libro,id)
}

const borrarLibro = id => {
    return model.deletelibro(id)
}

export default {
    obtenerLibro,
    guardarLibro,
    ActualizarLibro,
    borrarLibro
}