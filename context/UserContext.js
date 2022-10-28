import React from "react";
import useAuth from "hooks/useAuth";

const UserContext = React.createContext("");

export const UserContextProvider = ({ children }) => {
  const initialState = useAuth();
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

export default UserContext;
