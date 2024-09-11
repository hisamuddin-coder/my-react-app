import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex-center">
      <div className="logo flex-center">
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <h1>Todo List</h1>
    </header>
  );
}
