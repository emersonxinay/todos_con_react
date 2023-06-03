import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBoton } from './CreateTodoBoton';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: "Cortar pelo", completed: false },
  { text: "Liceos en Antofa", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Cortar panes", completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={30} />
      <TodoSearch />

      <TodoList >
        {defaultTodos.map(todo => (

          <TodoItem />
        )
        )}

      </TodoList >
      <CreateTodoBoton />

    </React.Fragment>
  );
}

export default App;
