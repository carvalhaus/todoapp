import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const userEmail = "admin@teste.com";
  const [tasks, setTaks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTaks(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);

  return (
    <APIContext.Provider value={{ tasks }}>{children}</APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
