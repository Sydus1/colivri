import React from 'react';
import '../styles/contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contáctanos</h2>
      <div className="container">
        <div className='row'>
          <div className="social-media col-6">
            <h3>@COLIVRI_UNIANDES</h3>
            <div className='icons-social-media'>
              <a href="mailto:viverovirtual@uniandes.edu.co" className="email-link"><i className="bi bi-envelope"></i></a>
            </div>
          </div>
          <div className="social-media col-6">
            <h3>@DISCUNIANDES</h3>
            <div className='icons-social-media'>
              <a href="https://facebook.com" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" className="social-link"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com" className="social-link"><i className="bi bi-twitter"></i></a>
              <a href="https://tiktok.com" className="social-link"><i className="bi bi-tiktok"></i></a>
              <a href="https://linkedin.com" className="social-link"><i className="bi bi-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;