import React from "react";
import img from '../assets/homo.jpg'
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h2 style={{fontSize:"4rem", color:"blue"}}>Essential Vitamins</h2>
        <p>Get Your Vitamins & Minerals</p>
        <img src={img} alt="Vitamins" />
        <button className="cta-button">See More</button>
      </div>
    </section>
  );
};

export default HeroSection;
