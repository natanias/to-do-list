import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import Form from "./form/index";
import { TiEdit } from "react-icons/ti";
import GrayImg from "./alert/index";

function ToDo({ todos, completeEvent, removeLista, updateList }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const atualizaEdits = (value) => {
    updateList(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={atualizaEdits} />;
  }

  return todos && todos.length >= 0 ? (
    todos.map((todo, index) => (
      <div
        className={todo.isNameComplet ? "todo-row name-complet" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeEvent(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeLista(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    ))
  ) : (
    <div>
      <GrayImg />
    </div>
  );
}

export default ToDo;
