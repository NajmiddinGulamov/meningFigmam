import React from "react";
import "./sign-up.css";
import Mediasimg from "../../assets/medias.png";

function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        
        <div className="signup-box">
          <h2 className="signup-title">Sign up</h2>
          <p className="signup-desc">Registration takes less than a minute but gives you full control over your studying.</p>
          
          <form className="signup-form">
            <div className="form-group">
              <span className="field-label">Full Name</span>
              <input type="text" placeholder="Your full name" />
            </div>

            <div className="form-group">
              <span className="field-label">Email</span>
              <input type="email" placeholder="Your working email" />
            </div>

            <div className="form-group">
              <span className="field-label">Password</span>
              <input type="password" placeholder="Your password" />
            </div>

            <div className="form-group">
              <span className="field-label">Confirm Password</span>
              <input type="password" placeholder="Confirm your password" />
            </div>

            <div className="form-actions">
              <label className="rem-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="signup-btn">Sign up</button>
          </form>

          <p className="footer-text">
            Already have an account? <span className="join-link">Sign in</span>
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

export default SignUp;