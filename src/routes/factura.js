// routes/factura.js
import express from 'express';
import { agregarPlatoAFactura } from '../controllers/factura.js';

const router = express.Router();

// Ruta para agregar un plato a la factura
router.post('/agregar', agregarPlatoAFactura);

export default router;
