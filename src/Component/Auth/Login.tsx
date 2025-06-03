import React, { useState } from "react";

// Type props for the component
interface LoginProps {
  handleLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is:", email);
    console.log("Password is:", password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-transparent">
      <div className="border-2 border-emerald-500 rounded-2xl p-20 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center underline underline-offset-4">
          Login Here
        </h1>
        <form
          className="flex flex-col items-center justify-center space-y-6 w-80"
          onSubmit={submitHandler}
        >
          <input
            className="w-full px-5 py-3 text-black outline-none bg-transparent border-2 border-emerald-500 text-xl rounded-full placeholder:text-white transition duration-300 focus:ring-2 focus:ring-emerald-500"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-5 py-3 text-black outline-none bg-transparent border-2 border-emerald-500 text-xl rounded-full placeholder:text-white transition duration-300 focus:ring-2 focus:ring-emerald-500"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <button
            type="submit"
            className="w-full px-5 py-3 text-white outline-none border-2 bg-emerald-500 text-xl rounded-full hover:scale-105 transition-transform duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

