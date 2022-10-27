
const agregarCodigoMostrar = async function (db,conection){
    if(!conection)return []
    try {
        await db.collection('productos').updateMany({},{$set :{codigo:'xxx.xxxx'}})
        let productos = await db.collection("productos").find().project({nombre:1,precio:1,codigo:1,_id:0}).toArray()
        console.log(productos)

    } catch(err) {
     console.log(err)
    }
}


export default{
    agregarCodigoMostrar
}