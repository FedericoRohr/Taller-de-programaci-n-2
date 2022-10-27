const findClientes = async (db,conection) => {
    if(!conection)return []
    try {
        let clientes = await db.collection("clientes").find().project({nombre:1,apellido:1,_id:0}).toArray()
        console.log(clientes)

    } catch(err) {
     console.log(err)
    }

}

export default{
    findClientes
}