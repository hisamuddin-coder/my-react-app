import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo() {
  return (
    <li className="todo-item">
      <p>todoitem</p>
      <div>
        <input type="checkbox" />
        <button className="btn btn-delete">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
