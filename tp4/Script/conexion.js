import { MongoClient } from "mongodb"

let conection = false

const conectar = async _ => {
    try {
        console.log("conectando a base de datos...")
        const client = new MongoClient('mongodb://127.0.0.1', {

            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        
        await client.connect()
        console.log("base de datos conectada")
        let db = client.db('empresa')
        conection = true
        return db
    } catch (err) {
        console.log(err)
    }
}

const isConected = function (){
return conection
}

export default{
    conectar,
    isConected
}



