import React, { useEffect, useState } from 'react';
import './Model.css';
import { Ollama } from "langchain/llms/ollama";


function Model() {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);
  const ollama = useState(new Ollama({
    baseUrl: "http://129.254.233.72:11434/",
    model: "mistral",
  }))[0];

  const appendHistory = (q, a) => {
    if (q !== '')
      setHistory((prevHistory) => [...prevHistory, "[Q] " + q]);

    if (a !== '')
      setHistory((prevHistory) => [...prevHistory, "[A] " + a]);
  };

  const handleClearButtonClick = () => {
    setHistory([]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmitButtonClick();
    }
  };

  const handleSubmitButtonClick = () => {
    setQuery(inputValue);
    appendHistory(inputValue, '');
  };

  useEffect(() => {
    ollama.call(query)
      .then(res => {
        appendHistory('', res);
      })
      .catch(err => { console.log(err) });
  }, [ollama, query]);

  return (
    <div className="Model">
      <h2>History</h2>
      <div className="history">
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <button onClick={handleClearButtonClick}>Clear history</button>
      </div>
      <h2>Query</h2>
      <div className="query">
        <input type="text" id="inputField" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button onClick={handleSubmitButtonClick}>Submit query</button><br/>
        <sup>[참고] 질문 및 서버 상황에 따라 응답 시간이 수초에서 수십초까지 소요될 수 있습니다.</sup>
      </div>
    </div>
  );
}

export default Model;
