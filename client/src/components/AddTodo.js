import { useState } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/AddTodo.scss";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {

    if (todoItem.title.trim().length === 0) {
      return
    }

    //props로 받아온 addItem 함수 실행
    addItem(todoItem);
    setTodoItem({title: ''}) // input 초기화
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({title: e.target.value})}
        onKeyPress={handleKeyPress}
        autoFocus
      />
      <button type="button" onClick={onButtonClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddTodo;
