import { useState, createContext, useEffect } from "react";

import { seed } from "../../db/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState("");

  const currentUser = localStorage.getItem("user") || '';
  const users = JSON.parse(localStorage.getItem("users"));

  const login = (data) => {
    const formattedEmail = data.email.toLowerCase();
    const existingUser = users.find((user) => user.id === formattedEmail);
    if (!existingUser) {
      setErrors("User not found");
      return;
    }
    if (existingUser.password !== data.password) {
      setErrors("Password incorrect");
      return;
    }

    localStorage.setItem("user", formattedEmail);
    setIsLoggedIn(true);
    setErrors("");
  };

  const register = (data) => {
    const formattedEmail = data.email.toLowerCase();
    const existingUser = users.find((user) => user.id === formattedEmail);
    if (existingUser) {
      setErrors("E-mail is already in use");
      return;
    }

    const newUserData = [...users, { id: formattedEmail, password: data.password }];
    localStorage.setItem("users", JSON.stringify(newUserData));
    localStorage.setItem("user", formattedEmail);
    setIsLoggedIn(true);
    setErrors("");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // initialize mock database
    if (!users) {
      localStorage.setItem("users", JSON.stringify(seed));
    }
  }, [users]);

  useEffect(() => {
    try {
      if (currentUser) {
        setIsLoggedIn(true);
      }
    } finally {
      setIsLoading(false);
    }
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login,
        register,
        logout,
        errors,
        setErrors,
        isLoading,
        currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
