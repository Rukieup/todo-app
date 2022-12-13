import { useState } from "react";
const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    //props로 받아온 addItem 함수 실행
    // if ()
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
      />
      <button type="button" onClick={onButtonClick}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
