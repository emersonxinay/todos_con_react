import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBoton } from './CreateTodoBoton';
import React from 'react';


const defaultTodos = [
  { text: "Cortar pelo", completed: true },
  { text: "Liceos en Antofagasta", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Cortar panes", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('los usuario buscan todos de ' + searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList  >
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}

          />
        ))}
      </TodoList >
      <CreateTodoBoton />

    </>
  );
}

export default App;
