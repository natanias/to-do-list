import React, { useState, useEffect, useRef } from "react";

function Form(props) {
  const [input, setInput] = useState();

  const inputRef = useRef(null);

  useEffect(() => {
    if (input) {
      inputRef.current.focus();
    }
  }, [input]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button className="todo-botao">Adicionar</button>
    </form>
  );
}

export default Form;
