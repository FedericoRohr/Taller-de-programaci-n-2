import express from 'express'
import { RouterAlumnos } from './router/alumnosRouter.js'
import CnxMongoDb from './model/db.js' 
import config from './config.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/alumnos/notas', new RouterAlumnos().start())

await CnxMongoDb.conectar()

/* if(config.MODO_PERSISTENCIA == 'MONGO'){
    await CnxMongoDb.conectar()
} */


const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

