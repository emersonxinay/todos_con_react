import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const {
    addTodo,
    setOpenModal,

  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false)
  }

  const onCancel = (event) => {
    setOpenModal(false)
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Ingrese algo interesante"
        value={newTodoValue}
        onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button  TodoForm-button--cancel" > Cancelar</button>
        <button type="submit" className="TodoForm-button  TodoForm-button--add" >Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }