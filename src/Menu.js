import React, { useState } from 'react';
import './Menu.css';

function Menu({ setModel }) {
  const [selectedItem, setSelectedItem] = useState('');
  const [options] = useState(['llama2', 'orca2', 'mistral']);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
    console.log(setModel);
    setModel(event.target.value);
  };

  return (
    <div className="Menu">
      <div className="title">Ollama</div>
      <div>&nbsp;&nbsp;</div>
      <div className="subtitle">with Mistral LLM</div>

      <select value={selectedItem} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Menu;
