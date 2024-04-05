import React, { useState } from 'react';
import axios from 'axios';

function UsuarioCreateForm() {
  const [formData, setFormData] = useState({
    contraseña: '',
    direccion: '',
    correo: '',
    telefono: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8086/api/Usuario/create', formData);
      console.log('Usuario creado exitosamente');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

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
      <button type="submit">Crear Usuario</button>
    </form>
  );
}

export default UsuarioCreateForm;
