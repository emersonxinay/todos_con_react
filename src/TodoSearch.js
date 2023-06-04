import './TodoSearch.css'
function TodoSearch() {
  return (

    <input className="TodoSearch" placeholder="Buscar Todo "
      onChange={(event) => {
        console.log("Escribiste en el TodoSearch")
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
      }}
    />

  )
}

export { TodoSearch }