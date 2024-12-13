import React from "react";
import "./PromoSection.css";
import promoImage from "../assets/image2.png"; // Replace with your image path

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-content">
        <div className="promo-text">
          <h1>
            Casino New Customer Offer
            <br />
            <span>Up to Rwf 2,000 Welcome Bonus</span>
          </h1>
          <p className="promo-description">
            Valid for new customers only. Opt-in required. Min. deposit of Rwf 1,000 required. 
            Valid on the first four deposits within 30 days. Bonus is subject to wagering of 50x. 
            Withdrawal limitations apply. <a href="#">Terms apply</a>
          </p>
          <button className="promo-button">Join Now</button>
        </div>
        <div className="promo-image">
          <img src={promoImage} alt="Promo Offer" />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
