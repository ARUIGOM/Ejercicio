import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role_id: {
    type: Number,
    required: true,
    default: 2, // Asignar el rol por defecto como 2
  },
  resetToken: {
    type: String, // Guardará el token de recuperación de contraseña
  },
});

const User = mongoose.model('User', userSchema);
export default User;
