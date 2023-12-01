import { useState } from "react";
import Button from "../button";
import NewTaksModal from "../modal";
import "./style.css";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { useAPI } from "../../context/apiContext";

const ListItem = ({ task }) => {
  const [showModal, setShowModal] = useState(false);

  const { deleteData } = useAPI();

  return (
    <li className="list_item">
      <div className="task">
        <TaskAltOutlinedIcon />
        {task.title}
      </div>
      <div className="button-container">
        <Button
          text="Edit"
          className="edit"
          onClick={() => setShowModal(true)}
        />
        <Button
          text="Delete"
          className="delete"
          onClick={() => deleteData(task.id)}
        />
      </div>
      {showModal && (
        <NewTaksModal mode={"edit"} setShowModal={setShowModal} task={task} />
      )}
    </li>
  );
};

export default ListItem;
