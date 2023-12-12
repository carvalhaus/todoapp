import "./style.css";
import Button from "../button";

const Signup = () => {
  return (
    <div className="sign-up">
      <form className="sign-up__form">
        <label htmlFor="email">
          Email address
          <input type="email" id="email" name="email" />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" id="password" name="password" />
        </label>

        <label htmlFor="confirm-password">
          Confirm password
          <input
            type="confirm-password"
            id="confirm-password"
            name="confirm-password"
          />
        </label>

        <Button className={"sign_up"} text={"sign up"} />
      </form>

      <p>OR</p>

      <div>SIGN UP WITH GOOGLE</div>
    </div>
  );
};

export default Signup;
