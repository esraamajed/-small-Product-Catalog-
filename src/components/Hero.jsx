import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ShopHub</h1>
        <p className="hero-subtitle">
          Discover amazing products at unbeatable prices
        </p>
        <button className="hero-button">Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;