import Button from "../button";
import "./style.css";

const Auth = () => {
  return (
    <div className="auth">
      <form className="auth__form">
        <label htmlFor="email">
          Email address
          <input type="email" id="email" name="email" />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" id="password" name="password" />
        </label>

        <Button className={"login"} text={"login"} />
      </form>
      <p className="signup">
        Don't have an account? <a href="/sign-up">Sign up</a>
      </p>
    </div>
  );
};

export default Auth;
