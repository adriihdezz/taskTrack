import React from 'react'
import ReactDom from 'react-dom'

const CreateNewTask = ({isOpen, setIsOpen}) => {
    if (!isOpen) return null

    return ReactDom.createPortal(
    <>
      <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
      <div className='fixed bottom-0 left-1/2 -translate-x-1/2  z-50 bg-white w-[91%] h-[80%] border-blueDate border-8 rounded-3xl flex flex-col justify-start items-center pt-3 gap-5'>
          <div className='w-[90%] h-15 bg-task rounded-2xl flex justify-center items-center '>
            <textarea placeholder='Title' className='text-4xl text-white w-[100%] h-12 text-center content-center' maxLength={20}></textarea>
          </div>
          <div className='w-[90%] h-35 flex justify-center items-center gap-5'>
            <div className='bg-task w-[100%] h-35 rounded-3xl flex flex-col justify-center items-center gap-2.5'>
              <button className='bg-grayButton w-[70%] h-8 flex justify-around items-center rounded-[13px]'><div className='bg-green-500 w-4 h-4 rounded-full'></div><h3>Done</h3></button>
              <button className='bg-grayButton w-[70%] h-8 flex justify-evenly items-center rounded-[13px]'><div className='bg-yellow-400 w-4 h-4 rounded-full'></div><h3>Pending</h3></button>
              <button className='bg-grayButton w-[70%] h-8 flex justify-evenly items-center rounded-[13px]'><div className='bg-red-500 w-4 h-4 rounded-full'></div><h3>Overdue</h3></button>
            </div>
            <div className='bg-task w-[100%] h-35 rounded-3xl flex flex-col justify-start items-center pt-2 gap-6'>
              <h3 className='text-[1.5rem]'>Due to...</h3>
              <input type="date" className='text-[0.8rem]'/>
            </div>
          </div>
          <div className='w-[90%] h-1/2 bg-task rounded-3xl flex flex-col justifty-start items-center'>
            <h3 className='text-[1.5rem] my-2'>Description</h3>
            <textarea placeholder='Define here your task...' className='bg-grayButton w-[95%] h-[80%] rounded-2xl text-[0.8rem] flex justify-center items-center p-5'/>
          </div>
          <div className='w-[90%] h-10 flex justify-center items-center gap-5 text-white'>
            <button className='w-[100%] h-10 bg-addButton rounded-4xl' onClick={() => setIsOpen(false)}>Discard</button>
            <button className='w-[100%] h-10 bg-blueDate rounded-4xl'>Save</button>
          </div>
          
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default CreateNewTask