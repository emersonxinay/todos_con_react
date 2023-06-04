import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBoton } from './CreateTodoBoton';
import React from 'react';


const defaultTodos = [
  { text: "Cortar pelo", completed: true },
  { text: "Liceos en Antofa", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Cortar panes", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={30} />
      <TodoSearch />

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
