"use client";

import { auth } from "@/services/firebase";

const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  console.log("Context", user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
