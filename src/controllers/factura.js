// src/controllers/factura.js

import Factura from '../models/factura.js';
import Dish from '../models/platos.js';
import Table from '../models/mesas.js';

// Función para agregar un plato a la factura
export const agregarPlatoAFactura = async (req, res) => {
  try {
    const { table_id, dish_id, quantity } = req.body;  // Obtener los datos del cuerpo de la solicitud (ID de la mesa, ID del plato, cantidad)

    // Buscar la mesa
    const table = await Table.findById(table_id);
    if (!table) {
      return res.status(404).json({ error: "Mesa no encontrada" });
    }

    // Buscar el plato
    const dish = await Dish.findById(dish_id);
    if (!dish) {
      return res.status(404).json({ error: "Plato no encontrado" });
    }

    // Calcular el total del plato basado en la cantidad
    const total = dish.price * quantity;

    // Crear la nueva factura
    const nuevaFactura = new Factura({
      table_id: table._id,
      dish_id: dish._id,
      dish_price: dish.price,
      quantity,
      total
    });

    // Guardar la factura en la base de datos
    await nuevaFactura.save();

    // Responder con éxito
    res.status(201).json({ message: "Plato agregado a la factura correctamente", factura: nuevaFactura });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el plato a la factura" });
  }
};
