import React from 'react';
import './Last.css';
import LeftImg from "../../assets/left-decor.png";
import RightImg from "../../assets/right-decor.png";

function Last() {
  return (
    <section className="last-section">
      <img src={LeftImg} alt="decor" className="decor-left" />
      <img src={RightImg} alt="decor" className="decor-right" />
      
      <div className="last-container">
        <p className="last-subtitle">DON'T MISS ANYTHING</p>
        <h1 className="last-title">Subscribe to the Createx School <br /> announcements</h1>
        
        <form className="subscribe-form">
          <input 
            type="email" 
            placeholder="Your working email"  
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Last;