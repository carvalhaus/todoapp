import Button from "../button";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Get Things Done</h1>
      <div className="button_container">
        <Button text="Add new" className="create" />
        <Button text="Sign Out" className="sign-out" />
      </div>
    </div>
  );
};

export default Header;
