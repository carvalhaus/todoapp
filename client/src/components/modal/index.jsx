import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./style.css";
import Button from "../button";
import { useState } from "react";

const NewTaksModal = ({ mode, setShowModal }) => {
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

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

          <label for="progress">
            Drag to select your current progress
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
          </label>

          <Button text={mode} className={mode} />
        </form>
      </div>
    </div>
  );
};

export default NewTaksModal;
