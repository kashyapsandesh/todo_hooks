import React,{useState} from 'react'
import './Todo.css'
const Todo = () => {
    const [items, setitems] = useState([])
    var newValue=''
  const addItems=()=>{
    if(newValue!==''){
        setitems(items.concat(newValue))
    }
  }
  return (
    <div className='container'>
      <h1>Todo App</h1>
      <div className="inner-container">
        <input type="text" className='input'onChange={e=>{
            newValue=e.target.value
        }} />
        <button className='btn-add' onClick={addItems}> Add</button>
      <ul>
        {
            items.map(element=>{
                return <li>{element}</li>;
            })
        }
      </ul>
      </div>
    </div>
  )
}

export default Todo
