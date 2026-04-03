import AfipCredencialesService from '../../services/backend-afip/credenciales.service.js';


const afipCredencialesService = new AfipCredencialesService();


export default class CreateCredencialesControllers{

    async generarKeyCsr(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
            const  id = req.body;
            const datos = req.body;
            console.log("datos desde gestor de inventario -> ",datos, id)
            const resultado = await afipCredencialesService.generarKeyCsr(datos, id);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al generar las credenciales"});
        }
    }


    async guardarCRT(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
            const  id = req.body;
            const certificado = req.body;
            console.log("datos desde gestor de inventario -> ",certificado, id)
            const resultado = await afipCredencialesService.guardarCrt(id, certificado);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al guardar el certificado"});
        }
    }


//token de acceso wsfe
    async obtenerTA(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
           const {id, cuit, servicio} = req.body;
            console.log(id, cuit, servicio)
            const resultado = await afipCredencialesService.obtenerTA(id, cuit, servicio);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al obtener ticket de acceso"});
        }
    }


    async obtenerTApadron(req, res) {
        try{
            //pasar todos los datos completos al otro backend
           const {id, cuit, servicio} = req.body;
            console.log(id, cuit, servicio)
            const resultado = await afipCredencialesService.obtenerTaPadron(id, cuit, servicio);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al obtener ticket de acceso"});
        }
    }

    async verificarAccesos(req, res) {
        try{
            //pasar todos los datos completos al otro backend
           const {id, cuit, servicio} = req.body;
            console.log(id, cuit, servicio)
            const resultado = await afipCredencialesService.verificarAccesos(id, cuit, servicio);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al obtener ticket de acceso"});
        }
    }


    async consultarCuitAfip(req, res) {
        try{
            //pasar todos los datos completos al otro backend
           const {id, cuit, cuitAConsultar, servicio} = req.body;
            console.log(id, cuit,cuitAConsultar, servicio)
            const resultado = await afipCredencialesService.consultarCuitAfip(id, cuit, cuitAConsultar,servicio);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al obtener ticket de acceso"});
        }
    }
}