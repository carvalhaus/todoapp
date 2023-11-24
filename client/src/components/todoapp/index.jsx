import Header from "../header";
import List from "../list";
import NewTaksModal from "../modal";
import User from "../user";
import "./style.css";

const TodoApp = () => {
  return (
    <div className="app">
      <Header />
      <User />
      <List />
      <NewTaksModal />
    </div>
  );
};

export default TodoApp;
