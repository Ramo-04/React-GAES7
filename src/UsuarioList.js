// UsuarioList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:8086/api/Usuario/all');
        setUsuarios(response.data.data); // Suponiendo que la respuesta devuelve un objeto con una propiedad "data" que contiene la lista de usuarios
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerUsuarios();
  }, []);

  // Renderizar la lista de usuarios
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <p>Correo: {usuario.correo}</p>
            <p>Dirección: {usuario.direccion}</p>
            <p>Teléfono: {usuario.telefono}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsuarioList;
