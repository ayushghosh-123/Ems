import React from "react";
import Header from "../Others/Header";
import CreateTask from "../TaskList/CreateTask";
import Alltask from "../Others/Alltask";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask/>
      <Alltask/>
      </div>
    
  );
}

export default AdminDashboard;
