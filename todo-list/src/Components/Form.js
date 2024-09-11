import { useState } from "react";

export default function Form({ onAddTodos }) {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("low priority");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo) return;
    const newTodo = { todo, priority, packed: false, id: Date.now() };
    console.log(newTodo);
    onAddTodos(newTodo);
    setTodo("");
    setPriority("");
  }

  return (
    <form className="form flex-center" onSubmit={handleSubmit}>
      <h2>Add new todo</h2>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>low priority</option>
        <option>high priority</option>
        <option>mid priority</option>
      </select>
      <input
        type="text"
        placeholder="item..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
