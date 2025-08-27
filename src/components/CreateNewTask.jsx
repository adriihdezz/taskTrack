import React from 'react'

const CreateNewTask = ({isOpen, setIsOpen}) => {
    if (!isOpen) return null

    return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2  z-1000 bg-white w-[91%] h-[80%] border-blueDate border-8 rounded-3xl flex flex-col justify-start items-center pt-3 gap-5'>
        <div className='w-[90%] h-15 bg-task rounded-2xl flex justify-center items-center '>
          <h1 className='text-white'>Title</h1>
        </div>
        <div className='w-[90%] h-35 flex justify-center items-center gap-5'>
          <div className='bg-task w-[100%] h-35 rounded-3xl flex flex-col justify-center items-center gap-2.5'>
            <button className='bg-grayButton w-[70%] h-8 flex justify-evenly items-center rounded-[13px]'><div className='bg-green-500 w-4 h-4 rounded-full'></div><h3>Done</h3></button>
            <button className='bg-grayButton w-[70%] h-8 flex justify-evenly items-center rounded-[13px]'><div className='bg-yellow-400 w-4 h-4 rounded-full'></div><h3>Pending</h3></button>
            <button className='bg-grayButton w-[70%] h-8 flex justify-evenly items-center rounded-[13px]'><div className='bg-red-500 w-4 h-4 rounded-full'></div><h3>Overdue</h3></button>
          </div>
          <div className='bg-task w-[100%] h-35 rounded-3xl flex justify-center items-start pt-2'>
            <h3 className='text-[1.5rem]'>Due to...</h3>
          </div>
        </div>
        <div className='w-[90%] h-1/2 bg-task rounded-3xl flex flex-col justifty-start items-center'>
          <h3 className='text-[1.5rem] my-2'>Description</h3>
          <div className='bg-grayButton w-[95%] h-[80%] rounded-2xl'>
                     
          </div>
        </div>
        <div className='w-[90%] h-10 flex justify-center items-center gap-5 text-white'>
          <button className='w-[100%] h-10 bg-addButton rounded-4xl' onClick={() => setIsOpen(false)}>Salir</button>
          <button className='w-[100%] h-10 bg-blueDate rounded-4xl'>Pulsame</button>
        </div>
        
    </div>
  )
}

export default CreateNewTask