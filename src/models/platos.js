// src/models/plato.js
import mongoose from 'mongoose';

const platoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
  descripcion: { type: String, required: true },
  alergenos: { type: [String], required: true },  // Una lista de alergenos
});

const Plato = mongoose.model('Plato', platoSchema);

export default Plato;
