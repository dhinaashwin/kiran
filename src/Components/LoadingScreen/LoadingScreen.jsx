import React from "react";
import './LoadingScreen.css'; // Assuming you will have a CSS file for styling

const Loading = () => {
  return (
    <section className="LoadingScreen">
          <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
        </div>
    </section>


  );
};

export default Loading;

