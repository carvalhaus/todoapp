import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext({
  tasks: [],
  setTasks: () => {},
  postData: () => {},
  editData: () => {},
  deleteData: () => {},
});

export function APIContextProvider({ children }) {
  const userEmail = "admin@teste.com";
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (data) => {
    const response = await fetch(`http://localhost:8000/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const postedData = await response.json();
    setTasks([...tasks, postedData]);
  };

  const deleteData = async (id) => {
    await fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateData = async (id, updatedData) => {
    await fetch(`http://localhost:8000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
  };

  useEffect(() => getData, []);

  return (
    <APIContext.Provider
      value={{ tasks, setTasks, getData, postData, deleteData, updateData }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
