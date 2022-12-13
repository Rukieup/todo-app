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
  };

  // const deleteTodo = (id) => {
  //   const result = todoitems.filter((a) => a.id !== id)
  //   setTodoitems(result)
  // }

  const deleteItem = (targetItem) => {
    const newTodoItems = todoitems.filter((a) => a.id !== targetItem.id)
    setTodoitems(newTodoItems)
  }

  return (
    <div className="App">
      <AddTodo addItem={addItem} />

      {todoitems.map((todo) => {
        return (
          <>
          <Todo key={todo.id} todo={todo} deleteItem={deleteItem} />
          </>
        )
      })}
    </div>
  );
};

export default App;
