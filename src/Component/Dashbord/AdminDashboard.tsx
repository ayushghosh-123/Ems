import React from "react";
import Header from "../Others/Header";
import CreateTask from "../TaskList/CreateTask";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask/>
      </div>
    
  );
}

export default AdminDashboard;
