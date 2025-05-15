import React from 'react';
import Header from '../Others/Header';
import TasklistNumber from '../Others/TasklistNumber';
import Tasklist from '../TaskList/Tasklist';

interface EmployeeDashboardProps {
  data: {
    id: number;
    email: string;
    password: string;
    tasks: any[]; // You can replace `any` with a proper `Task` interface if you have one
  };
}

const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ data }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen text-white">
      {/* <h1>Employee ID: {data?.id}</h1> */}
      <Header data={data}/>
      <TasklistNumber />
      <Tasklist tasks={data?.tasks} />
    </div>
  );
};

export default EmployeeDashboard;
