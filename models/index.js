// models/index.js
import Empresa from './core/datos-empresa.js';
import User from './core/propietario.js';
import PuntoDeVenta from './core/puntos-de-ventas.js';

import Vendedor from './sales/vendedor.js';

import Client from './sales/client.js';

import Product from './inventory/product.js';
import MovimientoInventario from './inventory/MovimientoInventario.js';


import Caja from './accounting/RegistroDeCaja.js';
import Ticket from './sales/tikets-emitidos.js';
import Marca from './inventory/Marca.js';
import Categoria from './inventory/Categoria.js';
export {
    Empresa,
    User,
    PuntoDeVenta,
    Vendedor,
    Client,
    Product,
    MovimientoInventario,
    Caja,
    Ticket,
    Marca,
    Categoria
};