console.log("¡Archivo de factura cargado!");
import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  table_id: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true },
  items: [
    {
      dish_id: { type: mongoose.Schema.Types.ObjectId, ref: "Dishes", required: true },
      dish_name: { type: String, required: true }, // Nombre del plato
      dish_price: { type: Number, required: true }, // Precio del plato
      quantity: { type: Number, required: true }, // Cantidad solicitada
      total: { type: Number, required: true }, // Total por el plato (precio * cantidad)
    }
  ],
  total: { type: Number, required: true }, // Total general de la factura
  status: { type: String, default: "pendiente" } // Estado de la factura (pendiente, pagado, etc.)
}, { timestamps: true });

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
