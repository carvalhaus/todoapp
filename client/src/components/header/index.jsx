import { useState } from "react";
import Button from "../button";
import NewTaksModal from "../modal";
import "./style.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const signOut = () => {
    console.log("SIGNOUT");
  };

  return (
    <div className="header">
      <h1>Get Things Done</h1>
      <div className="button_container">
        <Button
          text="Add new"
          className="create"
          onClick={() => setShowModal(true)}
        />
        <Button text="Sign Out" className="sign-out" onClick={signOut} />
      </div>
      {showModal && (
        <NewTaksModal mode={"create"} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Header;
