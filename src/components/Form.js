import React from 'react'
import {FaRegPlusSquare} from 'react-icons/fa'


 function Form  ({inputText,setinputText,todos,setTodos,setStatus}) {
    const inputTexthandler = (e)=>{
            setinputText(e.target.value)

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random() * 1000000}
        ])
setinputText('')
    }
    const statusHandler = (e)=>{
        setStatus(e.target.value)
       
    }
  return (
    <form>
    <input onChange={inputTexthandler} value={inputText} type='text' className='todo-input' />
    <button onClick={submitHandler} className='todo-button' type='submit'>
    <FaRegPlusSquare />
    </button>
    <div className='select'>
    <select onChange={statusHandler} name='todos' className='filter-todo'>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>

    </select>
    </div>
    </form>
  )
}
export default Form
