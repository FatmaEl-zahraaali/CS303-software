import "./sign.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="signin">
      <form className="Login" onSubmit={handleLogin}>
        <span className="titles">Login</span>

        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>

        <Link className="links" to="/signup">
          Sign Up
        </Link>

        <div className="submit1">
          <button type="submit" className="submit1">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;