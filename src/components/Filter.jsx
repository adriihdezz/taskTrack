import React from 'react'
import filter from '../assets/filter.svg'

const Filter = () => {
  return (
    <button className='bg-[rgba(0,0,0,0.3)] w-30 h-6 flex justify-center items-center text-[10px] text-gray-350 mt-3 rounded-full active:bg-[rgba(0,0,0,0.5)]'>
        <img src={filter}/>
        Search Filters
    </button>
  )
}

export default Filter