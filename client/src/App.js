import { useState, useRef } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "./styles/App.scss";

const App = () => {
  const [todoItems, setTodoItems] = useState([
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
    setTodoItems([...todoItems, newItem]) 
  };

  // const deleteTodo = (id) => {
  //   const result = todoitems.filter((a) => a.id !== id)
  //   setTodoitems(result)
  // }

  const deleteItem = (targetItem) => {
    const newTodoItems = todoItems.filter((a) => a.id !== targetItem.id)
    setTodoItems(newTodoItems)
  }

  return (
    <div className="App">
      <header>✨My Todo App</header>
      <AddTodo addItem={addItem}/>
      <div className="left-todos">🎀{todoItems.length} Todos</div>

      {todoItems.length > 0 ? (
        todoItems.map((todo) => {
          // console.log(item); // {id: 1, title: 'My Todo1', done: false}
          return <Todo key={todo.id} todo={todo} deleteItem={deleteItem} />;
        })
      ) : (
        <p className="empty-todos">Todo를 추가해주세요🔥</p>
      )}
    </div>
  );
};

export default App;
