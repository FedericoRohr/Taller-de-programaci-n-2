import express from 'express'
import { ControladorAlumnos } from '../controller/alumnosController.js'

const router = express.Router()

export class RouterAlumnos {
    constructor() {
      this.ControladorAlumnos = new ControladorAlumnos()
    }
    start() {
       
        router.post('/', this.ControladorAlumnos.postAlumno)

        router.get('/', this.ControladorAlumnos.getNotas)

        router.get('/promedio', this.ControladorAlumnos.getPromedio)

        return router
    }
}



