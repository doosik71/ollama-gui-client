import React, { useState } from 'react';
import './App.css';
import Menu from './Menu.js'
import Model from './Model.js'

function App() {
  const [model, setModel] = useState('llama2');

  return (
    <div className="App">
      <Menu setModel={setModel}/>
      <Model model={model}/>
    </div>
  );
}

export default App;
