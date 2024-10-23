import React from "react";
import "./Achievements.css";
const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-div">
        <div>
          <h1>ACHIEVEMENTS</h1>
        </div>
        <div className="achievements-container">
          <div className="achievements-item">
          <h2>Winners</h2>
            <img src="https://res.cloudinary.com/dhina11/image/upload/v1729521832/MOOT_yrxn7d.jpg"></img>
            <div className="achievements-details">
            <h3>All India Moot Court Competition, 2024</h3>
            <p>Winners</p>
            <span>The victorious teams in the inaugural All India Moot Court Competition 2024, hosted by RV Institute of Legal Studies, Bangalore.</span>
            </div>
           
          </div>
          <div className="achievements-item">
          <h2>Winners</h2>
            <img src="https://res.cloudinary.com/dhina11/image/upload/v1729521835/Mootcourt_6_hnzir3.jpg"></img>
            <div className="achievements-details">
              <h3>All India Moot Court Competition, 2023</h3>
              <p>Winners</p>
              <span>The victorious teams in the inaugural All India Moot Court Competition 2023, hosted by RV Institute of Legal Studies, Bangalore.</span>
            </div>
          </div>
          <div className="achievements-item">
          <h2>Quarter Finalist</h2>
          <img src="https://res.cloudinary.com/dhina11/image/upload/v1729523694/WhatsApp_Image_2024-10-17_at_11.34.33_PM_y8zozr.jpg"></img>
          <div className="achievements-details">
            <h3>
              3rd Justice J.S.Verma Memorial National Extempore Moot Court
              Competition
            </h3>
            <p>Quarter Finalist</p>
            <span>Quarter-Finalist in the esteemed 3rd Justice J.S. Verma Memorial National Extempore Moot Court Competition.</span>
            </div>
            </div>
            <div className="achievements-item">
            <h2>Quarter Finalist</h2>
          <img className="middle-image" src="https://res.cloudinary.com/dhina11/image/upload/v1729520187/ContactUs_hc770f.jpg"></img>
          <div className="achievements-details top-image">
            <h3>
              3rd Justice J.S.Verma Memorial National Extempore Moot Court
              Competition
            </h3>
            <p>Quarter-Finalist</p>
            <span>Quarter-Finalist in the esteemed 3rd Justice J.S. Verma Memorial National Extempore Moot Court Competition.</span>
            </div>
            </div>
          </div>
        
          {/* <div>
            <h3>7th National Moot Court Competition</h3>
            <p>Participant</p>
          </div> */}
        </div>
    </section>
  );
};

export default Achievements;
