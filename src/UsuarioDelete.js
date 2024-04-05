// UsuarioDelete.js
import React from 'react';
import axios from 'axios';

function UsuarioDelete({ id_usuario }) {
  // Función para manejar la eliminación del usuario
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8086/api/Usuario/delete/${id_usuario}`);
      // Manejar la respuesta si es necesario
      console.log('Usuario eliminado exitosamente');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Renderizar el botón de eliminar
  return (
    <button onClick={handleDelete}>Eliminar Usuario</button>
  );
}

export default UsuarioDelete;
