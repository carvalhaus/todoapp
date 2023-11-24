import "./style.css";
import ListItem from "../list-item";
import { useAPI } from "../../context/apiContext";

const List = () => {
  const { tasks } = useAPI();

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  console.log(sortedTasks);

  return (
    <ul className="list">
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task.title} />
      ))}
    </ul>
  );
};

export default List;
