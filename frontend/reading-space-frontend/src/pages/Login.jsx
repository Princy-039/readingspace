import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Logging in with:", loginData);
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <>
      <h1>Welcome Back</h1>
      <p>Please log in to your account</p>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button onClick={handleLogin}>Log In</button>
        <div>
          <p>
            <span
              onClick={goToForgotPassword}
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </span>
          </p>
          <p>
            Don’t have an account?{" "}
            <span
              onClick={goToSignup}
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
