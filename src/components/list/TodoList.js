import React, { useState } from "react";
import Form from "../form/index";
import ToDo from "../ToDo";

function Lista() {
  const [lista, setList] = useState([]);

  const addLista = (event) => {
    if (!event.text) {
      return;
    }

    const newList = [event, ...lista];

    setList(newList);
  };

  const removeLista = (id) => {
    const newList = [...lista].filter((element) => element.id !== id);

    setList(newList);
  };

  const updateList = (idValue, newValue) => {
    if (!newValue.text) {
      return;
    }
    setList((e) =>
      e.map((element) => (element.id === idValue ? newValue : element))
    );
  };

  const completeEvent = (id) => {
    let up = lista.map((todo) => {
      if (todo.id === id) {
        todo.isNameComplet = !todo.isNameComplet;
      }
      return todo;
    });
    setList(up);
  };

  return (
    <div>
      <h1>Lista De tarefas Diárias</h1>
      <Form onSubmit={addLista} />
      <ToDo
        todos={lista}
        completeEvent={completeEvent}
        removeLista={removeLista}
        updateList={updateList}
      />
    </div>
  );
}

export default Lista;
