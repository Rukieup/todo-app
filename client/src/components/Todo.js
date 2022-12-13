// 1. 함수형 컴포넌트
// 2. input(checkbox)와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링
import { useState } from "react";

const Todo = ({ todo , deleteItem }) => {
  const { id, title, done} = todo;
  const [todoItem, setTodoItem] = useState(todo)

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={todo.done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={() => deleteItem(todoItem)}>Delete</button>
    </div>
  );
};

export default Todo;