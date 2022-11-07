import { AlumnosFactoryDAO } from '../model/dao/alumnosFactory.js'
import config from '../config.js' 


export class ApiAlumnos {
    constructor(){
    this.alumnosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA) 
    }

    getPromedio = async _=> {
        return await  this.alumnosModel.findPromedio()
    }
    getNotas = async _ => {
        return await  this.alumnosModel.findNotas()
    }
    postAlumno = async (alumno) => {
        return await  this.alumnosModel.saveAlumno(alumno)
    }
   

}


