
import React from 'react';
import UsuarioList from './UsuarioList';
import UsuarioCreateForm from './UsuarioCreateForm';
import UsuarioUpdateForm from './UsuarioUpdateForm';
import UsuarioDelete from './UsuarioDelete';
import { Axios } from 'axios';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>Promec</h1>
      </header>
      <main>
        <h2>Crear Usuario</h2>
        <UsuarioCreateForm />
        <h2>Actualizar Usuario</h2>
        <UsuarioUpdateForm id_usuario={''} />
        <h2>Lista de Usuarios</h2>
        <UsuarioList />
        <h2>Eliminar Usuario</h2>
        <UsuarioDelete id_usuario={''} />
      </main>
    </div>
  );
}

export default App;
