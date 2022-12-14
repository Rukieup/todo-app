// 1. 함수형 컴포넌트
// 2. input(checkbox)와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링
import { useState } from "react";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({ todo, deleteItem }) => {
  const { id, title, done } = todo;
  const [todoItem, setTodoItem] = useState(todo);
  const [readOnly, setReadOnly] = useState(true);

  const onInputClick = (e) => {
    setReadOnly(false)
  };

  const editEventHandler = (e) => {
    // e.target.readOnly = false;
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    })
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true)
    }
  }

  const editDone = (e) => {
    const {done, ...rest} = todoItem;

    setTodoItem({
      done: !todoItem.done,
      ...rest,
    })
  }

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={todo.done}
        onClick={editDone}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        onClick={onInputClick}
        readOnly={readOnly}
        onChange={editEventHandler}
        onKeyPress={enterKeyEventHandler}
      />
      <button onClick={() => deleteItem(todoItem)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Todo;
