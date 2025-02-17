// src/routes/platos.js
import express from 'express';
import Plato from '../models/platos.js';  // Importa el modelo de Plato

const router = express.Router();

// Ruta para obtener todos los platos
router.get('/', async (req, res) => {
  try {
    // Obtiene todos los platos
    const platos = await Plato.find(); 

    // Si no hay platos, responde con un mensaje adecuado
    if (platos.length === 0) {
      return res.status(404).json({ message: "No hay platos disponibles" });
    }

    // Si hay platos, responde con los datos
    res.json(platos);
  } catch (error) {
    console.error("Error al obtener los platos:", error);
    res.status(500).json({ message: "Error al obtener los platos" });
  }
});

export default router;
