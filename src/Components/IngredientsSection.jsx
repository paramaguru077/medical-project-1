import React from "react";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img1.jpg'
import img3 from '../assets/img3.jpg'
const IngredientsSection = () => {
  return (
    <section className="ingredients-section">
      <div className="container">
        <h3>Better Ingredients</h3>
        <div className="ingredients-grid">
          <div className="ingredient-item">
            <img src={img1} alt="Ingredient" />
            <p>Vitamin C</p>
          </div>
          <div className="ingredient-item">
            <img src={img2} alt="Ingredient" />
            <p>Vitamin D3</p>
          </div>
          <div className="ingredient-item">
            <img src={img3} alt="Ingredient" />
            <p>Magnesium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
