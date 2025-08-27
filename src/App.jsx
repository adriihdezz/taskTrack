import { useState } from 'react'
import Title from './components/Title'
import Filter from './components/Filter'
import Task from './components/Task'
import AddButton from './components/AddButton'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])

  return (
    <div className='relative flex flex-col justify-center items-center w-[100%]'>
      <Title />
      <Filter />
      <div className='w-[100%] h-[82dvh] flex flex-col justify-start items-center mt-5 gap-2 overflow-scroll'>
        {tasks.map((task, index) => 
          <Task key={index}/>
        )}
      </div>
      <AddButton tasks={tasks} setTasks={setTasks}/> 
    </div>
  )
}

export default App
