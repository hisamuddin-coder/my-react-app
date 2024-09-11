import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Todos from "./Todos";

const initialItems = [
  { id: 1, todo: "home rent", priority: "high priority", status: false },
  { id: 2, todo: "new phone", priority: "low priority", status: false },
  {
    id: 3,
    todo: "electricity bill",
    priority: "mid priority",
    status: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialItems);

  function handleAddTodos(todo) {
    setTodos((todos) => [...todos, todo]);
  }
  function handleToggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }
  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <Form onAddTodos={handleAddTodos} />
      <Todos
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}
