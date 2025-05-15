import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Auth/Login";
import EmployeeDashboard from "./Component/Dashbord/EmployeeDashboard";
import AdminDashboard from "./Component/Dashbord/AdminDashboard";
import { AuthContext } from "./Contex/Authprovider";

function App() {
  const [user, setUser] = useState<string | null>(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
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
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (foundEmployee) {
      setUser("employee");
      setLoggedInUserData(foundEmployee); // ✅ Set the specific employee data
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", email: foundEmployee.email }) // optional
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
