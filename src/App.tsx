import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import './styles.css';

interface Props {}

const App: React.FC<Props> = () => (
  <div>
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
    <Filters />
  </div>
);

export default App;
