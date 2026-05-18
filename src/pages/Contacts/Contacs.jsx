import React from "react";
import "./contacts.css";
import Mediasimg from "../../assets/medias.png";
import Mapimg from "../../assets/map.png";
import GirlImg from "../../assets/girl3.png";
import Footer from "../../components/footer/Footer";
function Contacts() {
  return (
    <div className="contacts-page">
      <div className="container">

        <div className="contact-info-section">
          <div className="info-text">
            <span className="subtitle">CONTACT INFO</span>
            <h2 className="main-title">Get in touch</h2>

            <div className="info-block">
              <div className="info-item">
                <i className="icon-mail"></i>
                <div>
                  <span>Talk to us:</span>
                  <span className="info-val">hello@createx.com</span>
                </div>
              </div>
              <div className="info-item">
                <i className="icon-phone"></i>
                <div>
                  <span>Call us:</span>
                  <span className="info-val">(405) 555-0128</span>
                </div>
              </div>
              <div className="info-item">
                <i className="icon-map"></i>
                <div>
                  <span>Address:</span>
                  <span className="info-val">2464 Royal Ln. Mesa, New Jersey 45463, USA</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <span>FOLLOW US:</span>
              <div className="social-icons">
                <br />
                <img src={Mediasimg} alt="" />
              </div>
            </div>
          </div>

          <div className="map-block">
            <img src={Mapimg} alt="Location Map" />
          </div>
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52888.849377830025!2d-118.91033!3d34.17194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82b1f65ea2007%3A0xfce9e93fb17e3d02!2sThousand%20Oaks%2C%20CA!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        <div className="contact-form-section">
          <div className="form-image">
            <img src={GirlImg} alt="Illustration" />
          </div>

          <div className="form-wrap">
            <span className="subtitle">ANY QUESTIONS?</span>
            <h2 className="main-title">Drop us a line</h2>

            <form className="contact-form">
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">First Name*</span>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="input-group">
                  <span className="input-label">Last Name*</span>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Email*</span>
                  <input type="email" placeholder="Your working email" />
                </div>
                <div className="input-group">
                  <span className="input-label">Phone</span>
                  <input type="text" placeholder="Your phone number" />
                </div>
              </div>

              <div className="input-group">
                <span className="input-label">Message*</span>
                <textarea placeholder="Your message"></textarea>
              </div>

              <div className="form-footer">
                <label className="checkbox-wrap">
                  <input type="checkbox" />
                  <span>I agree to receive communications from Createx Online School</span>
                </label>
                <button type="submit" className="btn-send">Send message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Contacts;