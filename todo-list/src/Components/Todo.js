import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <tr className="todo-item">
      <td style={todo.status ? { textDecoration: "line-through" } : {}}>
        {todo.todo}
      </td>
      <td>
        <span
          className="priority"
          style={
            todo.priority === "high priority"
              ? { backgroundColor: "	#bb2124" }
              : todo.priority === "low priority"
              ? { backgroundColor: "#22bb33" }
              : { backgroundColor: "#f0ad4e" }
          }
        >
          {todo.priority}
        </span>
      </td>
      <td className="flex-center">
        <input
          type="checkbox"
          value={todo.status}
          onChange={() => onToggleTodo(todo.id)}
        />
        <button
          className="btn btn-delete"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}
