import React, { useState } from "react";
import "./Auth.css";
import logo from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [IsSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleswitch = () => {
    setIsSignUp(!IsSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    if (!email && !password) {
      alert("enter the name and password");
    }
    if (IsSignUp) {
      if (!name) {
        alert("enter the name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section class="auth-section">
      {IsSignUp && <AboutAuth />}
      <div class="auth-container-2">
        {/* {!IsSignUp && <img src={logo} alt="overflow-icon" className="login-logo"/>} */}
        <form onSubmit={handleSubmit}>
          {IsSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!IsSignUp && (
                <p
                  style={{
                    color: "#007ac6",
                    fontSize: "13px",
                    padding: "0 180px 0px 0",
                  }}
                >
                  Forget Password
                </p>
              )}
            </div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {IsSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain atleast eight
                <br /> characters,including atleast 1 letter and 1<br /> number.
              </p>
            )}
          </label>
          {IsSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to reeive occasionsal,
                <br />
                product updates,user research invitations,
                <br />
                company announcementa,digests
              </p>
            </label>
          )}
          {IsSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign Up", you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of
                <br />
                service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span>,
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
          <button type="submit" className="auth-btn">
            {IsSignUp ? "Sign Up" : "Log in"}
          </button>
        </form>
        <p>
          {IsSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            type="submit"
            className="handle-switch-btn"
            onClick={handleswitch}
          >
            {IsSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
