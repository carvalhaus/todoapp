import { useEffect } from "react";
import Header from "../header";
import List from "../list";
import User from "../user";
import "./style.css";

const TodoApp = () => {
  const userEmail = "admin@teste.com";

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);

  return (
    <div className="app">
      <Header />
      <User />
      <List />
    </div>
  );
};

export default TodoApp;
