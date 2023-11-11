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

    return storedToken && storedUserId
      ? { token: storedToken, userId: storedUserId, username: storedUsername }
      : null;
  });

  const signIn = (token, userId, username) => {
    setUser({ token, userId });
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
  };

  return {
    user,
    signIn,
    signOut,
  };
};

export default useProvideAuth;
