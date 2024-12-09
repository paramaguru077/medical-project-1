import React from "react";
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h3>Latest News</h3>
        <div className="news-grid">
          <div className="news-item">
            <img src={img4} alt="News" />
          </div>
          <div className="news-item">
            <img src={img5} alt="News" />
          </div>
          <div className="news-item">
            <img src={img4} alt="News" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
