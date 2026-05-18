import React from 'react';
import './Opinion.css';
import Avatar from "../../assets/woman1.png"; 

function Opinion() {
  return (
    <section className="opinion-section">
      <div className="container">
        
        <header className="opinion-header">
          <p>TESTIMONIALS</p>
          <h1>What our students say</h1>
        </header>

        <div className="opinion-wrapper">
          <div className="opinion-card">
            <div className="quote-icon">"</div>
            <div className="opinion-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis
                tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. 
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
            </div>
            <div className="author">
              <img src={Avatar} alt="Eleanor Pena" />
              <div className="author-info">
                <strong>Eleanor Pena</strong>
                <span>Position, Course</span>
              </div>
            </div>
          </div>

          <button className="next-btn">→</button>
        </div>

      </div>
    </section>
  );
}

export default Opinion;