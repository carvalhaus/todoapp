"use client";

import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";

const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut().then(() => {
      router.push("/");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}
