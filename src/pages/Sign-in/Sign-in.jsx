import React from "react";
import "./sign-in.css";
import Mediasimg from "../../assets/medias.png";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-container">

        <div className="signin-box">
          <h2 className="signin-title">Sign in</h2>
          <p className="signin-desc">Sign in to your account using email and password provided during registration.</p>

          <form className="signin-form">
            <div className="form-group">
              <span className="field-label">Email</span>
              <input type="email" placeholder="Your working email" />
            </div>

            <div className="form-group">
              <span className="field-label">Password</span>
              <div className="pass-input-wrap">
                <input type="password" placeholder="Your password" />
              </div>
            </div>

            <div className="form-actions">
              <label className="rem-me">
                <input type="checkbox" />
                <span>Keep me signed in</span>
              </label>
              <span className="forgot">Forgot password?</span>
            </div>

            <button type="submit" className="signin-btn">Sign in</button>
          </form>

          <p className="footer-text">
            <Link to="/signup">
              Don't have an account? <span className="join-link">Sign up</span>
            </Link>
          </p>

          <div className="social-box">
            <span className="social-info">Or sign in with</span>
            <div className="social-icons-wrap">
              <img src={Mediasimg} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignIn;