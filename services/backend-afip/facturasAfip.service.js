import axios from "axios";
import API_BASE_URL from "./api-direccion.js";

export default class FacturasAfipService {
    //manda facturas ABC 
    async emitirFacturas(id, cuit, servicio, factura) {
        try {
           
            const response = await axios.post(API_BASE_URL+"facturas/crear", {id, cuit, servicio, factura},
            { responseType: 'arraybuffer' } );//para recibir correctamente el pdf
            console.log("respuesta -> ", response);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async recuperar(idFactura) {
        try {
           
            const response = await axios.get(API_BASE_URL+"facturas/recuperarFactura/" + idFactura ,{     
                responseType: 'arraybuffer' // para recibir el PDF
              });
            console.log("respuesta -> ", response);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }


    async reintentar(id, cuit, servicio, factura) {
        try {
           
            const response = await axios.post(API_BASE_URL+"facturas/reintentar/" + factura,  {id, cuit, servicio},
            );
            console.log("respuesta -> ", response);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }


    async buscar(filtros) {
        try {
            // Pasa el objeto filtros directamente, no {filtros}
            const response = await axios.get(API_BASE_URL+"facturas/buscar", {
                params: filtros  // axios convertirá cada propiedad en query string
            });
            return response.data; // { success, data, paginacion }
        } catch (error) {
            console.error("Error al buscar facturas:", error);
            throw error;
        }
    }


    async recCae(id, cuit, servicio, factura, puntoVenta, tipoComprobante, numeroFactura) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/CAE", {id, cuit, servicio, factura, puntoVenta, tipoComprobante, numeroFactura},
            );
            console.log("respuesta -> ", response);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }



    async anular(id, cuit, servicio, facturaOriginal) {
        try {
           
            const response = await axios.post(API_BASE_URL+"facturas/anular", {id, cuit, servicio, facturaOriginal},
 );
            console.log("respuesta -> ", response);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

}