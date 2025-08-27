import React from 'react'
import eye from '../assets/eye.svg'

const Task = () => {
  return (
    <div className='w-[90%] h-15 rounded-2xl bg-white flex justify-start items-center'>
        <div className='bg-blueDate w-13 h-13 ml-1 rounded-2xl flex flex-col justify-center items-center'>
            <h2>20</h2>
            <h4>SEPT</h4>
        </div>
        <div className='w-[5%] h-5 bg-taskOverdue'></div>
        <div className='xl:w-[67%] xs:w-[57%] xm:w-[62%] h-11 bg-blueDate rounded-2xl flex justify-center items-center'>
          <h3>Go running</h3>
        </div>
        <button className='w-8 h-8 rounded-full bg-blueDate ml-2 flex justify-center items-center active:bg-blueDateHover'>
          <img src={eye} className='w-4 h-4' />
        </button>
    </div>
  )
}

export default Task