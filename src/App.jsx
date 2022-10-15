import "./App.css";
import React, { useState } from "react";
function App() {
  const [result, setresult] = useState("");
  const handleClick = (e) => {
    if (result === "Error value") {
      setresult("");
      let newValue = [...result];
      newValue = e.target.name;
      setresult(newValue);
    } else {
      let newValue = [...result];
      newValue = result.concat(e.target.name);
      setresult(newValue);
    }
  };
  const clear = () => {
    setresult("");
  };
  const backspace = () => {
    setresult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
    try {
      setresult(eval(result).toString());
    } catch {
      setresult("Error value");
    }
  };
  return (
    <div>
      <div className="container">
        <div>
          <form>
            <input type="text" value={result} />
          </form>
        </div>
        <div className="keybad">
          <button className="hilght" onClick={clear} id="clear">
            Clear
          </button>
          <button className="hilght" onClick={backspace} id="backspace">
            C
          </button>
          <button className="hilght" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="hilght" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="hilght" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="hilght" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button className="hilght" name="." onClick={handleClick}>
            .
          </button>
          <button className="hilght" name="=" onClick={calculate} id="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
