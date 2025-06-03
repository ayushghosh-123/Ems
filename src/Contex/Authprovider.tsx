import React, { useState, useEffect, createContext } from 'react';
import { ReactNode } from 'react';
import { getLocalStorage } from '../Utility/Localstorage';

// Define user and context types
interface User {
  email: string;
  password: string;
  [key: string]: any;
}

interface AuthData {
  employees: User[]; // ✅ match the return keys of getLocalStorage
  admin: User[];
}

// Create context with the right shape
export const AuthContext = createContext<AuthData | null>(null);

function Authprovider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<AuthData | null>(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage(); // ✅ correct key
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
}

export default Authprovider;


