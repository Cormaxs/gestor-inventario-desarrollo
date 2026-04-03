import axios from "axios";
import API_BASE_URL from "./api-direccion.js";

export default class AfipCredencialesService {
    async generarKeyCsr(datos, idPropietario) {
        try {
           
            const response = await axios.post(API_BASE_URL +"certificado/generar", idPropietario,  datos );
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }


    async guardarCrt(idUser, certificado) {
        try {
           
            const response = await axios.post(API_BASE_URL +"certificado/guardar",  idUser, certificado );
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async obtenerTA(id, cuit, servicio) {
        try {
           console.log(id, cuit, servicio)
            const response = await axios.post(API_BASE_URL +"ticket/acceso", { id, cuit, servicio} );
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async obtenerTaPadron(id, cuit, servicio) {
        try {
           console.log(id, cuit, servicio)
            const response = await axios.post(API_BASE_URL +"padron/ticket/obtener", { id, cuit, servicio} );
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async verificarAccesos(id, cuit, servicio) {
        try {
           console.log(id, cuit, servicio)
            const response = await axios.post(API_BASE_URL +"acceso/verificar", { id, cuit, servicio} );
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async consultarCuitAfip(id, cuit, cuitAConsultar, servicio) {
        try {
           console.log(id, cuit, cuitAConsultar, servicio)
            const response = await axios.post(API_BASE_URL +"cuit/consultar", { id, cuit, cuitAConsultar, servicio} );
            console.log("respuesta -> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }


}