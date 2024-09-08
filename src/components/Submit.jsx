import React from "react";
import "./stylesheets/Submit.css";

function Submit() {
  return (
    <div className="gradient">
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="input-box">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input type="text" name="email" required />
          </div>
          <div className="input-box">
            <label>Phone</label>
            <input type="text" name="phone" required />
          </div>
          <div className="input-box">
            <select name="stream" required>
                <option value="">Select your stream</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
                <option value="engineering">Engineering</option>
              </select>
          </div>
          <button type="submit" className="login-button">Register</button>
        </form>
        <div className="separator">OR</div>
        
        <button className="google-button">
          <img
            src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png"
            alt="Google Logo"
            className="google-logo"
          />
          Continue with Google
        </button>
      </div>
      </div>
      </div>
  );
}

export default Submit;
