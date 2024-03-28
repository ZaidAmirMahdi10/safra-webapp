// useAuth.js
import { useState, useContext, createContext } from 'react';

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');
    const storedUserType = localStorage.getItem("userType");


    return storedToken && storedUserId
    ? { token: storedToken, userId: storedUserId, username: storedUsername, userType: storedUserType }
    : null;
  });

  const signIn = (token, userId, username) => {
    setUser({ token, userId });
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
  };

 

  return {
    user,
    signIn,
  };
};

export default useProvideAuth;
