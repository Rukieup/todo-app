import { useState, useRef } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todoitems, setTodoitems] = useState([
    {
      id: 1,
      title: "My Todo1",
      done: false,
    },
    {
      id: 2,
      title: "My Todo2",
      done: false,
    },
    {
      id: 3,
      title: "My Todo3",
      done: true,
    },
  ]);
  const todoId = useRef(4)

  const addItem = (newItem) => {
    newItem.id = todoId.current++; // key를 위한 id 설정
    newItem.done = false; // done 초기화
    // 기존 todoitems를 유지하고, 새로운 newItem 추가
    setTodoitems([...todoitems, newItem]) 

    // newItem = {
    //   id: Object.keys(todoItem).length + 1,
    //   title: todoItem.title,
    //   done: false,
    // };
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />

      {todoitems.map((todo, idx) => {
        return <Todo key={idx} todo={todo} />;
      })}
    </div>
  );
};

export default App;
