// middleware/errorHandler.js

export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Muestra el error en la consola para el desarrollo
  
    const statusCode = err.statusCode || 500;  // Si el error tiene un statusCode, lo usamos. Si no, 500 (error interno del servidor)
    const message = err.message || 'Error interno del servidor';
  
    res.status(statusCode).json({
      success: false,
      message,
    });
  };
  