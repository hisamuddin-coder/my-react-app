import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <h1>Todo List</h1>
    </header>
  );
}
