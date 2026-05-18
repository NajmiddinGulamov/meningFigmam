import React from 'react';
import './Footer.css';
import FaceBokkImg from "../../assets/Facebook.png"
import TwitterImg from "../../assets/Twitter.png"
import Youtube from "../../assets/you.png"
import TelegramImg from "../../assets/telegram.png"
import LinkImg from "../../assets/link.png"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand">
            <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
            <div className="socials">
              <img src={FaceBokkImg} alt="facebokk" />
              <img src={TwitterImg} alt="" />
              <img src={Youtube} alt="" />
              <img src={TelegramImg} alt="" />
              <img src={LinkImg} alt="link" />
            </div>
          </div>

          <div className="footer-col">
            <h4>SITE MAP</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>COURSES</h4>
            <ul>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Management</a></li>
              <li><a href="#">HR & Recruiting</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US</h4>
            <p>(405) 555-0128</p>
            <p>hello@createx.com</p>
          </div>

          <div className="footer-col wide">
            <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <div className="subscribe-box">
              <input type="text" placeholder="Email address" />
              <button>→</button>
            </div>
            <p className="note">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>© All rights reserved. Made with ❤️ by Createx Studio</p>
          <a href="#top" className="go-top">GO TO TOP</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;