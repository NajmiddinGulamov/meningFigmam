import React from 'react';
import './Online.css';
import LogoImg from "../../assets/logo.png"
import Learn from '../../components/learn/Learn';
import ConvertImg from "../../assets/Convert.png"
import Opinion from '../../components/opinion/Opinion';
import Certificate from '../../components/certificate/Certificate';
import Last from '../../components/last/Last';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
function Online() {
  return (
    <div className="online-page">
      
      <header className="main-header">
        <div className="container header-wrapper">
          <div className="header-left">
            <nav className="header-nav">
              <ul>
                <Link to={'/'}>
                  <img src={LogoImg} alt="logo of header" />
                </Link>
                <li><Link >About Us</Link></li>
                <li><Link >Courses</Link></li>
                <li><Link >Events</Link></li>
                <li><Link >Blog</Link></li>
                <li><Link >Contacts</Link ></li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <button className="header-btn">Get consultation</button>
            <div className="user-auth">
              <span className="auth-text">Log in / Register</span>
            </div>
          </div>
        </div>
      </header>
      <h5 className="our">Enjoy your studying!</h5>
      <div className="enjoy">
        <div className="part-time">
          <h4>Our online courses</h4>
        </div>
      </div>
      <div className="sections">
        <div className="section">
          <a style={{ color: "#FF3F3A" }}>All</a>
          <a>Marketing</a>
          <a>Management</a>
          <a>HR & Recruting</a>
          <a>Design</a>
          <a>Development</a>
          <input type="text" placeholder="Search course..." className="input" />
        </div>
      </div>
      <Learn />
      <div className="footer-1">
        <img src={ConvertImg} alt="review" />
        <center className="load">Load More</center>
      </div>
      <Opinion/>
      <Certificate/>
      <Last/>
      <Footer/>
    </div >
  );
}

export default Online;