import React ,{useEffect, useState} from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'





function App() {

  const [inputText,setinputText] = useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);


  const filterHandler = ()=>{
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
    
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  useEffect(()=>{
    filterHandler();
    
  },[todos,status])
  return (
  <div className='App'>
  <header>
  <h1>Ed's Todo List</h1>
  </header>
 
  <Form 
  inputText={inputText}
    setinputText={setinputText}
     todos={todos}
      setTodos={setTodos} 
      setStatus={setStatus}
      filterHandler={filterHandler}
     />
  <TodoList todos={todos} setTodos={setTodos}  filteredTodos={filteredTodos} />
  </div>
  )
  
}

export  default App