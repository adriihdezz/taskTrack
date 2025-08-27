import React from 'react'
import add from '../assets/add.svg'

const AddButton = ({setIsOpen}) => {
  return (
    <div className="w-[100%] flex justify-end items-center absolute bottom-0 right-5">
        <button 
        className='w-15 h-15 bg-addButton rounded-full flex justify-center items-center active:bg-addButtonHover' 
        onClick={() => setIsOpen(true)}
        >
            <img src={add} />
        </button>
    </div>
  )
}

export default AddButton