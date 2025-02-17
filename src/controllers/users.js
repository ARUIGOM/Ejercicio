import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

export const loginUser = async (req, res, next) => {
  const { correo, contrasena } = req.body;

  try {
    const user = await User.findOne({ correo });

    if (!user) {
      const error = new Error('El correo no está registrado');
      error.statusCode = 404;
      throw error;  // Lanza el error y lo pasa al middleware de error
    }

    const isMatch = await bcryptjs.compare(contrasena, user.contrasena);

    if (!isMatch) {
      const error = new Error('Contraseña incorrecta');
      error.statusCode = 401;  // Código de estado para credenciales incorrectas
      throw error;  // Lanza el error y lo pasa al middleware de error
    }

    // Generar un token JWT
    const token = jwt.sign({ userId: user._id, role: user.id_rol }, 'mi_clave_secreta', { expiresIn: '1h' });


    res.json({
      success: true,
      token,
    });
  } catch (error) {
    next(error);  // Pasa el error al middleware de manejo de errores
  }
};
