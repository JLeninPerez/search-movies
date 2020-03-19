import React from 'react';
import { Title } from './components/Title'
import { SearcForm } from './components/SearchForm'

import 'bulma/css/bulma.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <Title>Buscador de Peliculas</Title>
      <div className="SearchForm-wrapper">
        <SearcForm></SearcForm>
      </div>      
    </div>
  );
}

export default App;
