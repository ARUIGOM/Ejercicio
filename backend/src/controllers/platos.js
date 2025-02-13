import Dishes from "../models/platos.js"; // Asegúrate de que esta ruta es correcta

export const obtenerPlatos = async (req, res) => {
  try {
    console.log("Consultando la base de datos para obtener platos...");
    const platos = await Dishes.find(); // Esto debería traer todos los platos
    
    console.log("Platos recuperados de la base de datos:", platos); // Ver los platos directamente en los logs

    if (platos.length === 0) {
      return res.status(404).json({ message: "No hay platos disponibles" });
    }

    return res.status(200).json(platos); // Devuelve los platos como respuesta
  } catch (error) {
    console.error("Error al consultar los platos:", error); // Log del error
    res.status(500).json({ message: "Error al obtener los platos" });
  }
};
