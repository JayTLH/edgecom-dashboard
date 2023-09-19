import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState("");

  const currentUser = localStorage.getItem("user");
  const users = JSON.parse(localStorage.getItem("users"));
  const articles = JSON.parse(localStorage.getItem("articles"));
  
  const login = (data) => {
    if (!users[data.email]) {
      setErrors("User not found");
      return;
    }

    localStorage.setItem("user", data.email);
    setIsLoggedIn(true);
    setErrors("");
  };

  const register = (data) => {
    if (users[data.email]) {
      setErrors("E-mail is already in use");
      return;
    }

    const newUserData = {
      ...users,
      [data.email]: { password: data.password },
    };
    localStorage.setItem("users", JSON.stringify(newUserData));
    localStorage.setItem("user", data.email);
    setIsLoggedIn(true);
    setErrors("");
  };

  const logout = () => {
    localStorage.setItem("user", null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // initialize mock database
    if (!users || !articles) {
      localStorage.setItem("users", JSON.stringify({ "test@test.com": { password: "Test1234" } }));
      localStorage.setItem("articles", JSON.stringify({}));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
