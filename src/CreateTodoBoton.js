import './CreateTodoButton.css'
function CreateTodoBoton() {
  return (
    <button className="CreateTodoButton"
      onClick={
        (event) => {
          console.log("le fiste click")
          console.log(event)
          console.log(event.target)
        }
      } >
      +
    </button>
  )
}

export { CreateTodoBoton }