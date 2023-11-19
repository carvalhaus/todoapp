import Button from "../button";
import "./style.css";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

const ListItem = ({ task }) => {
  return (
    <li className="list_item">
      <div className="task">
        <TaskAltOutlinedIcon />
        {task}
      </div>
      <input type="range" value={30} />
      <div className="button-container">
        <Button text="Edit" className="edit" />
        <Button text="Delete" className="delete" />
      </div>
    </li>
  );
};

export default ListItem;
