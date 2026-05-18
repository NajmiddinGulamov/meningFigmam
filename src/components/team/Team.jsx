import React from 'react';
import './Team.css';
import Girl1Img from "../../assets/girl2.png";
import Person1Img from "../../assets/person1.png";
import Person2Img from "../../assets/girl.png";
import Person3Img from "../../assets/person2.png";

function Team() {
  return (
    <section className="team-section">
      <div className="container">
        
        <div className="team-header">
          <div className="title-left">
            <p className="subtitle">BEST TUTORS ARE ALL HERE</p>
            <h1>Meet our team</h1>
          </div>
          <div className="slider-controls">
            <button className="prev">←</button>
            <button className="next">→</button>
          </div>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="image-box">
              <img src={Girl1Img} alt="Dianne Russell" />
            </div>
            <h3>Dianne Russell</h3>
            <p>Founder and CEO</p>
          </div>

          <div className="team-card">
            <div className="image-box">
              <img src={Person1Img} alt="Jerome Bell" />
            </div>
            <h3>Jerome Bell</h3>
            <p>Founder and Program Director</p>
          </div>

          <div className="team-card">
            <div className="image-box">
              <img src={Person2Img} alt="Kristin Watson" />
            </div>
            <h3>Kristin Watson</h3>
            <p>Marketer, Curator of Marketing Course</p>
          </div>

          <div className="team-card">
            <div className="image-box">
              <img src={Person3Img} alt="Marvin McKinney" />
            </div>
            <h3>Marvin McKinney</h3>
            <p>PM, Curator of Management Course</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;