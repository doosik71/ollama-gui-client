import React, { useEffect, useState } from 'react';
import './Model.css';
import { Ollama } from "langchain/llms/ollama";


function Model({model}) {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [ollama, setOllama] = useState(null);

  useEffect(() => {
    setOllama(new Ollama({
      baseUrl: "http://129.254.233.72:11434/",
      model: model,
    }));
    console.log(`Using ${model}`)
    setQuery('');
    setResponse('');
  }, [model]);

  const handleHistoryClearButtonClick = () => {
    setHistory([]);
    setResponse('');
  };

  const handleInputClearButtonClick = () => {
    setInputValue('');
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
    setHistory(history => [...history, `[Q] ${inputValue}`]);
    setQuery(inputValue);
  };

  useEffect(() => {
    setResponse('');

    const fetchData = async () => {
      try {
        const res = await ollama.stream(query);
        const reader = res.getReader();

        try {
          let responseData = '[A] ';
          setResponse(responseData);

          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              setHistory(history => [...history, responseData]);
              setResponse('');
              break;
            } else {
              setResponse(response => response + value);
              responseData += value;
            }
          }
        } finally {
          reader.releaseLock();
        }
      } catch (err) {
        setResponse(response => response + `\n${err}`);
      }
    };

    if (query !== '')
      fetchData();
  }, [ollama, query]);

  return (
    <div className="Model">
      <h2>History</h2>
      <div className="history">
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <div className="response">{response}</div>
        <button onClick={handleHistoryClearButtonClick}>Clear history</button>
      </div>
      <h2>Query</h2>
      <div className="query">
        <div className="input">
          <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <div className="clear" onClick={handleInputClearButtonClick}>⨯</div>
        </div>
        <button onClick={handleSubmitButtonClick}>Submit query</button><br />
        <sup>[Note] Response time may vary depending on the question and server conditions, ranging from a few seconds to tens of seconds.</sup>
      </div>
    </div>
  );
}

export default Model;
