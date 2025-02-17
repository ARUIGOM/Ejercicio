// routes/users.js
import express from 'express';
import { loginUser } from '../controllers/users.js';  // Asegúrate de que la ruta sea correcta
import { registerUser } from '../controllers/registerUser.js';  // Asegúrate de que la ruta sea correcta
import { forgotPassword , resetPassword } from '../controllers/passwordController.js';  // Importa las funciones del nuevo archivo

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para el login del usuario
router.post('/login', loginUser);

// Ruta para manejar la solicitud de olvido de contraseña
router.post('/forgot-password', forgotPassword);

// Ruta para manejar el restablecimiento de contraseña
router.post('/reset-password', resetPassword);

export default router;
