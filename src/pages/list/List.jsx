import React from "react";
import "./list.css";
import Last from "../../components/last/Last";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
function List() {
    return (
        <section className="events-list-page">
            <div className="container">

                <div className="list-heading">
                    <span className="subtitle">OUR EVENTS</span>
                    <h2 className="section-title">Lectures, workshops & master-classes</h2>
                </div>

                <div className="events-items-group">

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">05</span>
                            <div className="date-info">
                                <span className="month-name">August</span>
                                <span className="event-hour">11:00 - 14:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>Formation of the organizational structure of the company in the face of uncertainty.</h4>
                            <p>Online master-class</p>
                        </div>
                        <div className="btn-area">
                            <Link><button className="btn-view-outline">View more</button></Link>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">24</span>
                            <div className="date-info">
                                <span className="month-name">July</span>
                                <span className="event-hour">11:00 - 12:30</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>Building a customer service department. Best Practices.</h4>
                            <p>Online lecture</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item active-row">
                        <div className="date-area">
                            <span className="day-num">16</span>
                            <div className="date-info">
                                <span className="month-name">July</span>
                                <span className="event-hour">10:00 - 13:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
                            <p>Online workshop</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-solid">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">10</span>
                            <div className="date-info">
                                <span className="month-name">July</span>
                                <span className="event-hour">9:00 - 14:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>Find and evaluate: search and assessment tools for candidates.</h4>
                            <p>Online workshop</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">27</span>
                            <div className="date-info">
                                <span className="month-name">June</span>
                                <span className="event-hour">15:00 - 19:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI.</h4>
                            <p>Online master-class</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">15</span>
                            <div className="date-info">
                                <span className="month-name">June</span>
                                <span className="event-hour">10:00 - 12:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>Marketing or growth hacking: main differences and what business needs.</h4>
                            <p>Online lecture</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">02</span>
                            <div className="date-info">
                                <span className="month-name">June</span>
                                <span className="event-hour">11:00 - 13:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>How to brief a client and present your design to approve it from the first show.</h4>
                            <p>Online lecture</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">29</span>
                            <div className="date-info">
                                <span className="month-name">May</span>
                                <span className="event-hour">10:00 - 12:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>Who is a project manager and do I want to be PM?</h4>
                            <p>Online lecture</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                    <div className="event-single-item">
                        <div className="date-area">
                            <span className="day-num">18</span>
                            <div className="date-info">
                                <span className="month-name">May</span>
                                <span className="event-hour">10:00 - 12:00</span>
                            </div>
                        </div>
                        <div className="text-area">
                            <h4>The company's business page as an additional tool to support the announcement.</h4>
                            <p>Online lecture</p>
                        </div>
                        <div className="btn-area">
                            <button className="btn-view-outline">View more</button>
                        </div>
                    </div>

                </div>

                <div className="pagination">
                    <span className="page-num active-page">1</span>
                    <span className="page-num">2</span>
                    <span className="page-num">3</span>
                    <span className="page-num">4</span>
                    <span className="page-arrow">→</span>
                </div>

            </div>
            <Last />
            <Footer />
        </section>
    );
}

export default List;