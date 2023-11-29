import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./style.css";
import Button from "../button";
import { useState } from "react";
import { useAPI } from "../../context/apiContext";

const NewTaksModal = ({ mode, setShowModal, task }) => {
  const { getData } = useAPI();

  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : "admin@teste.com",
    title: editMode ? task.title : "",
    progress: editMode ? task.progress : 50,
    date: editMode ? "" : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/todos/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        console.log("DONE");
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        console.log("EDITED");
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));

    console.log(data);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal__header">
          <h2>Let's {mode} your task !</h2>
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            <CloseOutlinedIcon />
          </button>
        </div>

        <form className="form">
          <input
            className="title"
            required
            maxLength={30}
            type="text"
            placeholder="Write down your task"
            name="title"
            value={data.title}
            onChange={handleChange}
          />

          <label for="progress">Drag to select your current progress</label>
          <input
            required
            type="range"
            id="progress"
            name="progress"
            min="0"
            max="100"
            value={data.progress}
            onChange={handleChange}
          />

          <Button
            text={mode}
            className={mode}
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
};

export default NewTaksModal;
