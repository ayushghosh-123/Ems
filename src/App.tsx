import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Auth/Login";
import EmployeeDashboard from "./Component/Dashbord/EmployeeDashboard";
import AdminDashboard from "./Component/Dashbord/AdminDashboard";
import { AuthContext } from "./Contex/Authprovider";

// Type definitions
type UserRole = "admin" | "employee" | null;

function App() {
  const [user, setUser] = useState<UserRole>(null);
  const [loggedInUserData, setLoggedInUserData] = useState<any>(null); // You should replace `any` with a specific employee type
  const authData = useContext(AuthContext);
  console.log(authData)

  // Keep this if you want to persist login across refreshes
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role as UserRole);
      }
    }
  }, [authData]);

  const handleLogin = (email: string, password: string) => {
    if (!authData) {
      alert("Data not loaded");
      return;
    }

    const foundAdmin = authData.admin?.find(
      (a) => a.email === email && a.password === password
    );

    const foundEmployee = authData.employee?.find(
      (e) => e.email === email && e.password === password
    );

    if (foundAdmin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ UserRole: "admin" , email: foundAdmin.email }));
    } else if (foundEmployee) {
      setUser("employee");
      setLoggedInUserData(foundEmployee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ UserRole: "employee", email: foundEmployee.email })
      );
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;

