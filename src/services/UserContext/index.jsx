import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Armazena todo o objeto de usuário
  const [messages, setMessages] = useState([]);

  // Manter o usuário no site
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Caso o usuário exista, configura ele no estado
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const setUserWithStorage = (userData) => {
    setUser(userData);

    localStorage.setItem("user", JSON.stringify(userData));
  };

  const userName = user?.name; // Obtém o nome do usuário a partir do objeto

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUserWithStorage,
        userName,
        messages,
        setMessages,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
