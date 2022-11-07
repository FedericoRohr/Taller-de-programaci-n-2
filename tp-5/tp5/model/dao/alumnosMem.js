export class AlumnosMemDao {
    constructor() {
        this.alumnos = [
            { id: '1', nombre: 'Juan', apellido:"Rohr", nota :10 },
            { id: '2', nombre: 'Ana', apellido: "Gomez", nota:8},
        ]
    }


    findNotas = async () => {
       let notas = []
       this.alumnos.forEach(alumno => notas.push(alumno.nota))
        return notas
    }

    findPromedio = async () => {
        let cant = this.alumnos.length
        let total = this.alumnos.reduce((a,b) =>a.nota+b.nota)
        return {promedio: total/cant, cantidad:cant}
    }

    saveAlumno = async alumno => {
        //parsea string a numerico
        alumno.nota = parseInt(alumno.nota)
        // asigna un id
        const id = parseInt(this.alumnos[this.alumnos.length - 1].id) + 1
        alumno.id = String(id)
        this.alumnos.push(alumno)

        return {status:"ok"}
    }

   
}
