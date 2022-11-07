import { ApiAlumnos } from "../api/alumnosApi.js"


export class ControladorAlumnos {
    constructor(){
     this.apiAlumnos = new ApiAlumnos
    }

    getPromedio = async (req,res) => {
        res.json(await  this.apiAlumnos.getPromedio() )
    }

    getNotas = async (req,res) => {
        res.json(await  this.apiAlumnos.getNotas() )
    }
    
    postAlumno = async  (req,res) => {
        const alumno = req.body
        res.json(await  this.apiAlumnos.postAlumno(alumno))
    
    }
    
}

