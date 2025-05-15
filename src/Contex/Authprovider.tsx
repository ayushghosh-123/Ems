import React, { useState, useEffect, createContext} from 'react';
import { ReactNode } from 'react';
import { getLocalStorage } from '../Utility/Localstorage';

export const AuthContext = createContext()

function Authprovider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const {employee, admin} = getLocalStorage();
    setUserData({employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default Authprovider;
