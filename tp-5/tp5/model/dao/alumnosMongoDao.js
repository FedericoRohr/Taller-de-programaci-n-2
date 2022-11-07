import { MongoClient, ObjectId } from "mongodb"
import CnxMongoDb from "../db.js"

//const client = new MongoClient('mongodb://localhost',{

export class AlumnosMongoDao {

    constructor() {

    }

    findNotas = async () => {
        if (!CnxMongoDb.conection) return []
        try {
            let notas = await CnxMongoDb.db.collection('alumnos').find({}).project({nota:1,_id:0}).toArray()
            return notas
        } catch (err) {
            console.log(err)
        }

    }


    findPromedio = async () => {
        if (!CnxMongoDb.conection) return []
        try {
            let notas = await CnxMongoDb.db.collection('alumnos').find({}).project({nota:1,_id:0}).toArray()
            let total=0
            notas.forEach(alumno => {
               total+= alumno.nota
            });
            let cant = notas.length
            return { "promedio": total / cant, "cantidad": cant }
        } catch (err) {
            console.log(err)
        }

    }

    saveAlumno = async alumno => {
        if (!CnxMongoDb.conection) return {}
        alumno.nota = parseInt(alumno.nota)
        await CnxMongoDb.db.collection('alumnos').insertOne(alumno)

        return {status:"ok"}
    }



}
