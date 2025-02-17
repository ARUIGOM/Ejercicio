import User from '../models/users.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { username, email, password, role_id } = req.body;

  // Verificar si todos los campos requeridos están presentes
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: 'El correo o el nombre de usuario ya están registrados.' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario con la contraseña hasheada
    const newUser = new User({ username, email, password: hashedPassword, role_id });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
