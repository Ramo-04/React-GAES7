// UsuarioUpdateForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsuarioUpdateForm({ id_usuario }) {
  const [usuario, setUsuario] = useState(null);
  const [formData, setFormData] = useState({
    contraseña: '',
    direccion: '',
    correo: '',
    telefono: ''
    // Añade más campos según sea necesario
  });

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:8086/api/Usuario/list/${id_usuario}`);
        setUsuario(response.data.data); // Suponiendo que la respuesta devuelve un objeto con los datos del usuario
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    obtenerUsuario();
  }, [id_usuario]);

  // Función para manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para enviar la solicitud de actualización
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/api/Usuario/update/${id_usuario}`, formData);
      // Manejar la respuesta si es necesario
      console.log('Usuario actualizado exitosamente');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Renderizar el formulario de actualización
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="text"
          id="contraseña"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Actualizar Usuario</button>
    </form>
  );
}

export default UsuarioUpdateForm;
