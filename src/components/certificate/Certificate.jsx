import React from 'react';
import './Certificate.css';
import CertificateImg from "../../assets/certificate.png";
function Certificate() {
  return (
    <section className="cert-section">
      <div className="cert-container">
        <div className="cert-content">
          <p className="subtitle">CREATEX CERTIFICATE</p>
          <h1>Your expertise will <br /> be confirmed</h1>
          <p className="desc">
            We are accredited by international professional <br /> 
            organizations and institutes:
          </p>
        </div>
        <div className="cert-image">
          <img src={CertificateImg} alt="Certificate" />
        </div>
      </div>
    </section>
  );
}

export default Certificate;