import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Todos from "./Todos";

const initialItems = [
  { id: 1, todo: "home rent", priority: "high priority", status: false },
  { id: 2, todo: "new phone", priority: "low priority", status: true },
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
    setTodos((todo) => [...todos, todo]);
  }

  return (
    <div className="container">
      <Header />
      <Form onAddTodos={handleAddTodos} />
      <Todos />
    </div>
  );
}
