import { useState } from "react";

export default function Form({ onAddTodos }) {
  const [addItem, setAddItem] = useState("");
  const [priority, setPriority] = useState("green");

  function handleSubmit(e) {
    e.preventDefault();
    if (!addItem) return;
    const newTodo = { addItem, priority, packed: false, id: Date.now() };
    console.log(newTodo);
    onAddTodos(newTodo);
    setAddItem("");
    setPriority("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new todo</h2>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>green</option>
        <option>yellow</option>
        <option>red</option>
      </select>
      <input
        type="text"
        placeholder="item..."
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
