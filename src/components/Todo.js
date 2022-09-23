import React,{useState} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

 function Todo({text,todos,setTodos,todo}) {
    const[clicked,setClicked] = useState(false)
    const deleteHanler = ()=>{
     
setClicked(true)
        setTimeout((e) => {
            setTodos(todos.filter(el => el.id !== todo.id))
        }
        , 500);
    }
    const completedHandler = (e)=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }return item
        }))
    
     
    }
  return (
    <div className={`todo ${clicked ? "deleted":''}`} >
    <li className={`todo-item ${todo.completed ? "completed":''}`} >{text}</li>
    <div className="icon">
    <AiOutlineCheck className='check' onClick={completedHandler}/>
    <BsFillTrashFill className='trash' onClick={deleteHanler}/></div>

    </div>
  )
}
export default Todo