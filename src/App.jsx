import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Title from './components/Title'
import Filter from './components/Filter'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
      <Title />
      <Filter />
      <div className='w-[100%] flex flex-col justify-center items-center mt-5 gap-2'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      
    </div>
  )
}

export default App
