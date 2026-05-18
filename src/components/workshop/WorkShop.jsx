import React from 'react';
import './WorkShop.css';

function WorkShop() {
  return (
    <div className="workshop-page">
      <div className="container">
        
        <div className="top-title">
          <p>OUR EVENTS</p>
          <h1>Lectures & workshops</h1>
        </div>

        <div className="events-wrapper">
          <div className="event-row">
            <div className="date">
              <h2>05</h2>
              <div><strong>August</strong><p>11:00 - 14:00</p></div>
            </div>
            <div className="info">
              <h4>Formation of the organizational structure of the company...</h4>
              <span>Online master-class</span>
            </div>
            <button className="view-btn">View more</button>
          </div>

          <div className="event-row active">
            <div className="date">
              <h2 className="red">24</h2>
              <div><strong>July</strong><p>11:00 - 12:30</p></div>
            </div>
            <div className="info">
              <h4>Building a customer service department. Best Practices.</h4>
              <span>Online lecture</span>
            </div>
            <button className="view-btn filled">View more</button>
          </div>

          <div className="event-row">
            <div className="date">
              <h2>16</h2>
              <div><strong>July</strong><p>10:00 - 13:00</p></div>
            </div>
            <div className="info">
              <h4>How to apply methods of speculative design in practice...</h4>
              <span>Online workshop</span>
            </div>
            <button className="view-btn">View more</button>
          </div>
        </div>

        <div className="bottom-action">
          <h3>Do you want more?</h3>
          <button className="all-events-btn">Explore all events</button>
        </div>

      </div>
    </div>
  );
}

export default WorkShop;