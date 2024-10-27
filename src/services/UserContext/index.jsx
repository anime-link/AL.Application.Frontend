import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Armazena todo o objeto de usuário
  const [messages, setMessages] = useState([]); 
  const userName = user?.name; // Obtém o nome do usuário a partir do objeto

  return (
    <UserContext.Provider value={{ user, setUser, userName, messages, setMessages  }}>
      {children}
    </UserContext.Provider>
  );
};
