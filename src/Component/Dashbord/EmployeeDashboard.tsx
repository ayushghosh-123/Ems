import React from 'react'
import Header from '../Others/Header'
import TasklistNumber from '../Others/TasklistNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TasklistNumber/>
      <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard