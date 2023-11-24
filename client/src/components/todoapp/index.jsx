import Header from "../header";
import List from "../list";
import User from "../user";
import "./style.css";

const TodoApp = () => {
  return (
    <div className="app">
      <Header />
      <User />
      <List />
    </div>
  );
};

export default TodoApp;
