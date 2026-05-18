import React from "react";
import "./view.css";
import Last from "../../components/last/Last";
import Footer from "../../components/footer/Footer";
function EventsGrid() {
  return (
    <section className="events-grid-section">
      <div className="container">
        
        <div className="grid-header">
          <span className="subtitle">OUR EVENTS</span>
          <h2 className="section-title">Lectures, workshops & master-classes</h2>
        </div>

        <div className="events-grid-container">
          
          <div className="event-card">
            <div className="card-date">
              <span className="date-red">05 Aug</span>
              <span className="time-gray">11:00 - 14:00</span>
            </div>
            <div className="card-body">
              <h4>Formation of the organizational structure of the company in the face of uncertainty.</h4>
              <p>Online master-class</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">24 Jul</span>
              <span className="time-gray">11:00 - 12:30</span>
            </div>
            <div className="card-body">
              <h4>Building a customer service department. Best Practices.</h4>
              <p>Online lecture</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">16 Jul</span>
              <span className="time-gray">10:00 - 13:00</span>
            </div>
            <div className="card-body">
              <h4>How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
              <p>Online workshop</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">10 Jul</span>
              <span className="time-gray">9:00 - 14:00</span>
            </div>
            <div className="card-body">
              <h4>Find and evaluate: search and assessment tools for candidates.</h4>
              <p>Online workshop</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">27 Jun</span>
              <span className="time-gray">15:00 - 19:00</span>
            </div>
            <div className="card-body">
              <h4>Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI.</h4>
              <p>Online master-class</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card active-card">
            <div className="card-date">
              <span className="date-red">15 Jun</span>
              <span className="time-gray">10:00 - 12:00</span>
            </div>
            <div className="card-body">
              <h4>Marketing or growth hacking: main differences and what business needs.</h4>
              <p>Online lecture</p>
            </div>
            <button className="card-btn-solid">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">02 Jul</span>
              <span className="time-gray">11:00 - 13:00</span>
            </div>
            <div className="card-body">
              <h4>How to brief a client and present your design to approve it from the first show.</h4>
              <p>Online lecture</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">29 May</span>
              <span className="time-gray">11:00 - 12:00</span>
            </div>
            <div className="card-body">
              <h4>Who is a project manager and do I want to be PM?</h4>
              <p>Online lecture</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

          <div className="event-card">
            <div className="card-date">
              <span className="date-red">18 May</span>
              <span className="time-gray">10:00 - 12:00</span>
            </div>
            <div className="card-body">
              <h4>The company's business page as an additional tool to support vacancies.</h4>
              <p>Online lecture</p>
            </div>
            <button className="card-btn-outline">View more</button>
          </div>

        </div>

        <div className="pagination-grid">
          <span className="p-num p-active">1</span>
          <span className="p-num">2</span>
          <span className="p-num">3</span>
          <span className="p-num">4</span>
          <span className="p-arrow">→</span>
        </div>

      </div>
      <Last/>
      <Footer/>
    </section>
  );
}

export default EventsGrid;