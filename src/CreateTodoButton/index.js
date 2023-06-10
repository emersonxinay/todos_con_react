import './CreateTodoButton.css'
function CreateTodoBoton({ setOpenModal }) {
  return (
    <button className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      } >
      +
    </button>
  )
}

export { CreateTodoBoton }