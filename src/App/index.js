import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


// localStorage.removeItem('TODOS_v1')
// const defaultTodos = [
//   { text: "Cortar pelo", completed: true },
//   { text: "Liceos en Antofagasta", completed: true },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Cortar panes", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));




function App() {


  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('log 1')
  // React.useEffect(() => {
  //   console.log('loooog 2')
  // })
  // React.useEffect(() => {
  //   console.log('loooog 2')
  // }, [])
  React.useEffect(() => {
    console.log('loooog 2')
  }, [totalTodos])
  console.log('log 3')

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );



  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}


    />
  );


}

export default App;
