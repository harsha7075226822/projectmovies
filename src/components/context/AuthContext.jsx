import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
    jwtToken: "",
  });

  const [searchValue, setSearchValue] = useState("");

  return (
    <AuthContext.Provider value={{ authData, setAuthData, searchValue, setSearchValue }}>
      {children}
    </AuthContext.Provider>
  );
}

