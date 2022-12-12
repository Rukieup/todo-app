import {useState} from 'react';
import Todo from "./components/Todo";

const App = () => {
  const [todoItem, setTodoItem] = useState([
    {
      id: 1,
      title: 'My Todo1',
      done: false
    },
    {
      id: 2,
      title: 'My Todo2',
      done: false
    },
    {
      id: 3,
      title: 'My Todo3',
      done: true
    },
  ])

  return (
    <div className="App">
    
      {todoItem.map((todo, idx)=> {
        return(
            <Todo key={idx} todo={todo}/>
        )
      })}
    </div>
  );
}

export default App;
