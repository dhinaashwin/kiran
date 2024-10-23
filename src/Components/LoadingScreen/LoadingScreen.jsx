import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; // Assuming you will have a CSS file for styling
import { motion } from "framer-motion"; // Import Framer Motion

const Loading = () => {
  const [zoomOut, setZoomOut] = useState(false);

  // Trigger the zoom-out effect after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomOut(true); // Start zooming out after 3.5 seconds (adjust as needed)
    }, 3800);

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts early
  }, []);

  return (
    <motion.section
      initial={{ opacity: 1, scale: 1 }} // Start fully visible
      animate={{ opacity: zoomOut ? 0 : 1, scale: zoomOut ? 1.5 : 1 }} // Animate zoom out and fade out when `zoomOut` is true
      transition={{ duration: 1 }} // Adjust the duration of the zoom effect
      className="LoadingScreen"
    >
      <div className="loading-div">
        <div className="Kiran-rup">
          <div className="kiran">
            {["K", "I", "R", "A", "N"].map((letter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 1500 }} // Start off-screen
                animate={{ opacity: 1, x: 0 }} // Move to original position
                exit={{ opacity: 0, x: 0 }} // Exit at original position
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                {letter}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 2000 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide into view
            exit={{ opacity: 0, x: 0 }} // Exit at the current position
            transition={{ delay: 1.5, duration: 1.75 }}
            className="Rup"
          >
            <div>R</div>
            <div>U</div>
            <div>P</div>
          </motion.div>
        </div>
        <div className="portfolio">
          <motion.div
            initial={{ opacity: 0, y: 1900 }} // Start below the screen
            animate={{ opacity: 1, y: 0 }} // Slide up to the screen
            exit={{ opacity: 0, y: 0 }} // Exit at current position
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            PORTFOLIO
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Loading;
