import axios from "axios";
import { updateUser_services } from '../../services/auth_services.js';
import {update_company } from '../../services/company_services.js';
import API_BASE_URL from './api-direccion.js';

export default class AfipUsers {
    //crea los datos de la empresa de afip, y devuelve el id para guardar en el propietario y tener los datos fiscales guardados
    async createCompany(empresa, idPropietario, idUser) {
        try {
            console.log("datos recibidos", empresa, idPropietario, idUser);
            const response = await axios.post(API_BASE_URL+"usuario/datos-fiscales", { empresa });
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                                // ✅ Pasar un objeto con el campo idDatosFiscales
                await update_company(idPropietario, { idDbAfip: response.data.guardado._id });
                await updateUser_services(idUser, { idDbAfip: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async editarCompany(datosActualizar, idEmpresaAfip) {
        try {
            const response = await axios.post(API_BASE_URL+"usuario/datos-fiscales/" + idEmpresaAfip ,  datosActualizar );
            console.log("respuesta desde editarCompany services-> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al actualizar datos en el backend de AFIP:", error);
            throw error;
        }
    }

    async ultimoComprobanteLocal(datos) {
        try {
            console.log("datos", datos);
            const response = await axios.post(API_BASE_URL+"usuario/comprobantes/ultimo-db",  datos );
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async updateContador(datos) {
        try {
           console.log("services->",datos)
            const response = await axios.post(API_BASE_URL+"usuario/comprobantes/contador", datos);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }

    async createUlistarTodosLosNumerossuario(idUser) {
        try {
           
            const response = await axios.get(API_BASE_URL+"usuario/comprobantes/puntos/" + idUser);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async actualizarNumero(datos) {
        try {
           
            const response = await axios.post(API_BASE_URL+"usuario/comprobantes/numero", datos);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async sincronizarContadorDB(datos) {
        try {
           console.log("datos ->", datos)
            const response = await axios.post(API_BASE_URL+"usuario/comprobantes/sincronizar", datos);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async proximoComprobante(datos) {
        try {
           
            const response = await axios.post(API_BASE_URL+"usuario/comprobantes/proximo-numero", datos);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async reservarNumero(datos) {
        try {
           
            const response = await axios.post(API_BASE_URL+"usuario/comprobantes/incrementar-contador", datos);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async eliminarPuntodeventaComprbantes(datos) {
        try {
            const response = await axios.delete(API_BASE_URL+"usuario/comprobantes/contador", {
                data: datos  // Correcto para enviar cuerpo en DELETE
            });

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async obtenerDatosDelUsuarioComprobantes(UserId) {
        try {
           
            const response = await axios.post(API_BASE_URL+"usuario/datos-fiscales/" + UserId);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }
    async obtenerDatosDeEmpresa(EmpresaId) {
        try {
           
            const response = await axios.get(API_BASE_URL+"usuario/datos-fiscales/" + EmpresaId);
            console.log("respuesta -> ", response.data);

            if (response?.data?.guardado?._id) {
                console.log("entro al if");
                // ✅ Pasar un objeto con el campo idDatosFiscales
                await updateUser_services(idPropietario, { idDatosFiscales: response.data.guardado._id });
            }
            return response.data;
        } catch (error) {
            console.error("Error al crear el usuario en el backend de AFIP:", error);
            throw error;
        }
    }


// ult numero comprobante desde afip
    async ultimoComprobanteAfip(datos) {
        try {
           console.log("desde services ultimo comprobante",datos)
            const response = await axios.post(API_BASE_URL+"afip/parametros/ultimo-comprobante",datos );
            console.log("respuesta ultimo comprobante -> ", response.data);

            return response.data;
        } catch (error) {
            console.error("Error al consultar ultimo comprobante de  AFIP:", error);
            throw error;
        }
    }
}