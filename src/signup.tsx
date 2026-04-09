import { Link, useNavigate } from "react-router-dom";
import "./sign.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="Signup">
      <form className="signup" onSubmit={handleSignup}>
        <span className="titles">Signup</span>

        <div className="inputs">
          <label>Username</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Password</label>
          <input type="password" required />

          <label>Confirm Password</label>
          <input type="password" required />

          <label>User Type</label>
          <select required className="select">
            <option value="">Select type</option>
            <option value="student">Student</option>
            <option value="doctor">Doctor</option>
          </select>

          <p>I already have an account?</p>

          <Link className="link1" to="/login">
            Login
          </Link>

          <div className="submit2">
            <button type="submit" className="submit2">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;