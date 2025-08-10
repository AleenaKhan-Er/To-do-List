import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todo_items from './Todo_items'

const Todo = () => {
  return (
    <>
      <div className='h-9/12 w-3xl bg-white place-self-center rounded-xl  '>

      <div className='HEADER flex justify-center items-center h-16'>
        <img className='h-10' src={todo_icon} />
        <h1 className='py-3 px-5 text-3xl font-semibold'>To-do-List</h1>
      </div>

      <div className="INPUT flex justify-between rounded-full pl-5 mx-10 bg-gray-300 ">
        <input className='bg-transparent border-0 outline-none  h-14 placeholder:text-slate-600 text-xl ' type="text" placeholder='Add your task'/>
        <button className='border-none rounded-full bg-orange-500 w-40 text-xl text-white font-semibold cursor-pointer'>Add +</button>
      </div>
      
      <div className='TODOLIST  '>
        <Todo_items text="Kuch to gadbad h daya"/>
        <Todo_items text="Bhookh lagi h khaana do"/>
      </div>


      </div>

      
       
    
    </>
  )
}

export default Todo
