import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleOutputClick = () => {
    setOutputText(inputText);
  };

  return (
    <CountContext.Provider value={{ inputText,outputText, handleInputChange, handleOutputClick }}>
      {children} 
    </CountContext.Provider>
  );
};

const Counter = () => {
  const { inputText,outputText, handleInputChange, handleOutputClick} = useContext(CountContext);

  return (
    <div>
    <input
      type="text"
      value={inputText}
      onChange={handleInputChange}
      placeholder="Enter text"
    />
    <button onClick={handleOutputClick} className="context--btn">Output</button>
    <p>{outputText}</p>
  </div>
  );
};

const App = () => {
    return (
      <CountProvider>
        <div className="app">
          <Counter />
        </div>
      </CountProvider>
    );
  };
  
  export default App;n