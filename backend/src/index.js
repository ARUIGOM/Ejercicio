// src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/users.js';
import facturaRoutes from './routes/factura.js';
import platosRoutes from './routes/platos.js';  // Importa las rutas de platos

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/factura', facturaRoutes);
app.use('/api/platos', platosRoutes); // Registra la ruta de platos

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../../proyecto/build')));

// Servir el archivo index.html para rutas no relacionadas con la API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../proyecto/build/index.html'));
});

// Conexión con MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch((error) => console.error('❌ Error al conectar a MongoDB:', error));
