import React from 'react'
import add from '../assets/add.svg'

const AddButton = ({tasks, setTasks}) => {
  return (
    <div className="absolute w-[100%] flex justify-end items-center bottom-10 right-5">
        <button 
        className='w-15 h-15 bg-addButton rounded-full flex justify-center items-center active:bg-addButtonHover' 
        onClick={() => setTasks(prevTasks => [...prevTasks, prevTasks[prevTasks.length - 1] + 1])}
        >
            <img src={add} />
        </button>
    </div>
  )
}

export default AddButton