import FacturasAfipService from '../../services/backend-afip/facturasAfip.service.js';


const facturasAfipService = new FacturasAfipService();


export default class FacturasAfip{

    async emitirFacturas(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
          const {id, cuit, servicio, factura} = req.body;

            console.log("datos desde gestor de inventario -> ",id, cuit, servicio, factura)
            const resultado = await facturasAfipService.emitirFacturas(id, cuit, servicio, factura);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
          // Configurar headers para devolver el PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=factura.pdf');
        res.send(resultado); // envía el buffer directamente
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al generar las credenciales"});
        }
    }



    async recuperar(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
         
            const {idFactura} = req.params;
            console.log("datos desde gestor de inventario -> ",idFactura)
            const resultado = await facturasAfipService.recuperar(idFactura);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
          // Configurar headers para devolver el PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=factura.pdf');
        res.send(resultado); // envía el buffer directamente
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al generar las credenciales"});
        }
    }


    async reintentar(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
          const {id, cuit, servicio} = req.body;
          const {factura} = req.params;

            console.log("datos desde gestor de inventario -> ",id, cuit, servicio, factura)
            const resultado = await facturasAfipService.reintentar(id, cuit, servicio, factura);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
          // Configurar headers para devolver el PDF
        res.send(resultado); // envía el buffer directamente
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al generar las credenciales"});
        }
    }


    async buscar(req, res) {
        try {
            const { estado, tipoComprobante, desde, hasta, numero, puntoVenta, cuitReceptor, cae, page, limit, userId } = req.query;
            const filtros = {
                userId,
                estado,
                tipoComprobante,
                desde,
                hasta,
                numero,
                puntoVenta,
                cuitReceptor,
                cae,
                page,
                limit
            };
            console.log("datos desde gestor de inventario -> ", filtros);
            const resultado = await facturasAfipService.buscar(filtros);
            // resultado ya es JSON, lo enviamos directamente
            res.json(resultado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al buscar facturas" });
        }
    }


    async recCae(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
          const {id, cuit, servicio, factura, puntoVenta, tipoComprobante, numeroFactura} = req.body;

            console.log("datos desde gestor de inventario -> ",id, cuit, servicio, factura, puntoVenta, tipoComprobante, numeroFactura)
            const resultado = await facturasAfipService.recCae(id, cuit, servicio, factura, puntoVenta, tipoComprobante, numeroFactura);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
          // Configurar headers para devolver el PDF
       
        res.json(resultado); // envía el buffer directamente
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al generar las credenciales"});
        }
    }


    async anular(req, res) {
        
        try{
            //pasar todos los datos completos al otro backend
          const {id, cuit, servicio, facturaOriginal} = req.body;

            console.log("datos desde gestor de inventario -> ",id, cuit, servicio, facturaOriginal)
            const resultado = await facturasAfipService.anular(id, cuit, servicio, facturaOriginal);
            //guardar el _id devuelto para tener los datos fiscales, guardar en propietario la referencia l id
          // Configurar headers para devolver el PDF
    
        res.json(resultado); // envía el buffer directamente
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error al generar las credenciales"});
        }
    }
}