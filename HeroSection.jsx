import React from "react";
import "./HeroSection.css";
import promoImage from "../assets/image1.png"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            New Customer Offer <br />
            <span>Up to RWF 30,000 in Free Bets + Free Spins*</span>
          </h1>
          <p className="hero-description">
            Min Deposit: RWF 10,000. First deposit matched up to RWF 30,000. 1x
            wagering at odds of 1.75+ to unlock Free Bets.
            Customers are required to deposit a minimum of RWF 10,000 to qualify
             for free spins, free Spins expire 48 hours after crediting and the
              free Spins will be credited as Cash. <a href="">Terms apply</a>
          </p>
          <button className="hero-button">Join Now</button>
        </div>
        <div className="hero-image">
          <img src={promoImage} alt="Promo Players" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
