import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About ShopHub</h1>
        
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to ShopHub, your number one source for all things shopping. 
            We're dedicated to providing you the very best of products, with an 
            emphasis on quality, customer service, and uniqueness.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Founded in 2025, ShopHub has come a long way from its beginnings. 
            When we first started out, our passion for providing the best online 
            shopping experience drove us to create a platform that offers quality 
            products at competitive prices.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="features-list">
            <li>✓ Wide range of quality products</li>
            <li>✓ Competitive prices</li>
            <li>✓ Fast and reliable shipping</li>
            <li>✓ Excellent customer service</li>
            <li>✓ Secure payment options</li>
            <li>✓ Easy returns and refunds</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to you. 
            If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="contact-info">
            Email: support@shophub.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;