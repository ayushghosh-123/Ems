import React from 'react'

function TasklistNumber() {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl h-40 w-[45%] py-5 px-10 bg-red-400'>
        <h2 className='text-3xl font-semibold text-left'>0</h2>
        <h3 className='text-xl font-bold text-left'>New Task</h3>
      </div>
      <div className='rounded-xl h-40 w-[45%] py-5 px-10 bg-blue-400'>
        <h2 className='text-3xl font-semibold text-left'>0</h2>
        <h3 className='text-xl font-bold text-left'>New Task</h3>
      </div>
      <div className='rounded-xl h-40 w-[45%] py-5 px-10 bg-green-400'>
        <h2 className='text-3xl font-semibold text-left'>0</h2>
        <h3 className='text-xl font-bold text-left'>New Task</h3>
      </div>
      <div className='rounded-xl h-40 w-[45%] py-5 px-10 bg-yellow-400'>
        <h2 className='text-3xl font-semibold text-left'>0</h2>
        <h3 className='text-xl font-bold text-left'>New Task</h3>
      </div>
    </div>
  )
}

export default TasklistNumber
