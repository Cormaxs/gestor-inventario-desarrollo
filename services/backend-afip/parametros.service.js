import axios from "axios";
import API_BASE_URL from "./api-direccion.js";

export default class ParametrosAfip {
    async tipoComprobante(id, cuit, servicio) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/tipos-comprobante", { id, cuit, servicio });
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async tipoConcepto(id, cuit, servicio) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/tipos-concepto", { id, cuit, servicio });
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async tipodni(id, cuit, servicio) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/tipos-documento", { id, cuit, servicio });
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async tipoiva(id, cuit, servicio) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/tipos-iva", { id, cuit, servicio });
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async tipomoneda(id, cuit, servicio) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/tipos-moneda", { id, cuit, servicio });
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }



    async ultCbteAfip(id, cuit, servicio, puntoVenta, tipoComprobante) {
        try {
           
            const response = await axios.post(API_BASE_URL+"afip/parametros/ultimo-comprobante", { id, cuit, servicio, puntoVenta, tipoComprobante });
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
}