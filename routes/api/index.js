// routes/api/index.js
import { Router } from 'express';
import auth_router from './v1/auth.routes.js'; // verificado, anda correcto
import companyRoutes from './v1/company.routes.js'; 
import vendorRoutes from './v1/vendedor.routes.js';
import product_Router from './v1/product.routes.js';
import point_salesRoutes from './v1/point-sales.routes.js';
import facturas_sin_afip from "./v1/facturas-sin-afip.js";
import archivos_routes from "./v1/archivos.routes.js";
import registroCajas_routes from "./v1/registroCajas.routes.js";



//backend afip
import usuario from './v1/afip-backend-aparte/usaurio.routes.js';
import credenciales from './v1/afip-backend-aparte/credenciales.routes.js';
import parametros from './v1/afip-backend-aparte/parametros.routes.js';
import facturasAfip from './v1/afip-backend-aparte/facturasAfip.routes.js';

const routerV1 = Router();

// Agrega todas las rutas con sus prefijos base
routerV1.use('/auth', auth_router); //autenticacion de usuario
routerV1.use('/companies', companyRoutes); //compania
routerV1.use('/vendors', vendorRoutes);//vendedores
routerV1.use('/products', product_Router); //productos
routerV1.use('/tickets', facturas_sin_afip); //facturas sin afip, tickets internos
routerV1.use('/point-sales', point_salesRoutes); //puntos de ventafacturas sin afip tickets internos
routerV1.use("/archivos", archivos_routes);//subir y bajar archivos pdf
routerV1.use("/cajas", registroCajas_routes);//gestor de cajas


//afip backend
routerV1.use("/afip/", usuario);
routerV1.use("/afip/credenciales", credenciales);
routerV1.use("/afip/parametros", parametros);
routerV1.use("/afip/facturas", facturasAfip)
export default routerV1;