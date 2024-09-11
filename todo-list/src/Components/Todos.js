import Todo from "./Todo";

export default function Todos({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <table className="todos">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </table>
  );
}
