import AfipUsers from '../../services/backend-afip/usuarios.service.js';


const afipUsers = new AfipUsers();


export default class AfipControllers{

 async crearCompany(req, res) {
    
    try{
        //pasar todos los datos completos al otro backend
        const {empresa, idPropietario, iduser} = req.body;
        console.log("datos desde gestor de inventario crear compania -> ",req.body)
        const resultado = await afipUsers.createCompany(empresa, idPropietario, iduser);
        //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
        res.json(resultado);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Error al crear el usuario"});
    }
}


async editarCompany(req, res) {
    
    try{
        //pasar todos los datos completos al otro backend
      
       const empresa = req.body; //no descomprimir {}
       const {idEmpresa} = req.params;
        console.log("datos desde gestor de inventario update empresa -> ",empresa, idEmpresa)
        const resultado = await afipUsers.editarCompany(empresa, idEmpresa);
        //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
        res.json(resultado);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Error al actualizar datos "});
    }
}

async ultimoComprobanteLocal(req, res){
    try{
        const resultado = await afipUsers.ultimoComprobanteLocal(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async ultimoComprobanteAfip(req, res){
    try{
        console.log("entro ultimo comprobante-> ", req.body)
        const resultado = await afipUsers.ultimoComprobanteAfip(req.body)
        res.send(resultado);
    }catch(error){

    }
}


async updateContador(req, res){
    try{
        console.log("controllers")
        const resultado = await afipUsers.updateContador(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async listarTodosLosNumeros(req, res){
    try{
        const {idUser} = req.params;
        console.log("id user -> ", idUser)
        const resultado = await afipUsers.createUlistarTodosLosNumerossuario(idUser)
        res.send(resultado);
    }catch(error){

    }
}

async actualizarNumero(req, res){
    try{

        console.log("body ->", req.body)
        const resultado = await afipUsers.actualizarNumero(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async sincronizarContadorDB(req, res){
    try{

        console.log("sincronizar -> ",req.body)
        const resultado = await afipUsers.sincronizarContadorDB(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async proximoComprobante(req, res){
    try{

        
        const resultado = await afipUsers.proximoComprobante(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async reservarNumero(req, res){
    try{

        
        const resultado = await afipUsers.reservarNumero(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async eliminarPuntodeventaComprbantes(req, res){
    try{
        const resultado = await afipUsers.eliminarPuntodeventaComprbantes(req.body)
        res.send(resultado);
    }catch(error){

    }
}

async obtenerDatosDelUsuarioComprobantes(req, res){
    try{

        const {idUser} = req.params;
        const resultado = await afipUsers.obtenerDatosDelUsuarioComprobantes(idUser)
        res.send(resultado);
    }catch(error){

    }
}

async obtenerDatosDeEmpresa(req, res){
    try{

        const {idEmpresa} = req.params;
        console.log("id empresa -> ", idEmpresa)
        const resultado = await afipUsers.obtenerDatosDeEmpresa(idEmpresa)
        console.log("resultado -> ", resultado)
        res.send(resultado);
    }catch(error){

    }
}
 }