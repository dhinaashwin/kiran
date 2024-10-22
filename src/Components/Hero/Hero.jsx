import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay for children elements
        staggerChildren: 0.3, // Stagger time between child animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section className="hero_section" id="home">
      <div className="hero_web mt-2">
        {/* Image Animation */}
        <motion.div
          className="img-div"
          initial={{ opacity: 0, x: 100 }} // Image slides in from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1 }}
        >
          <img
            src="https://res.cloudinary.com/dhina11/image/upload/v1729279511/Untitled-1_1_gejnsa.jpg"
            alt="Kiran Rup"
          />
        </motion.div>

        {/* Text and Details Animation */}
        <motion.div
          className="details"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="details-child" variants={childVariants}>
            <motion.h3 variants={childVariants}>Hello, I'm</motion.h3>
            <motion.h1 variants={childVariants}>KIRAN RUP</motion.h1>
            <motion.p variants={childVariants}>
              JUNIOR ADVOCATE PRACTICING IN MADRAS HIGH COURT
            </motion.p>

            {/* Buttons */}
            <motion.div className="buttons" variants={childVariants}>
              <motion.button
                className="button-blue"
                whileHover={{ scale: 1.05 }} // Hover effect
                whileTap={{ scale: 0.95 }} // Tap effect
              >
                Download Resume
              </motion.button>

              <a href="#contact">
                <motion.button
                  className="button-transparent"
                  whileHover={{ scale: 1.05 }} // Hover effect
                  whileTap={{ scale: 0.95 }} // Tap effect
                >
                  Contact Me
                </motion.button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="icons" variants={childVariants}>
              <motion.div
                className="icon icon-1"
                whileHover={{ scale: 1.04, rotate: 15 }} // Rotate on hover
              >
                <img
                  src="https://res.cloudinary.com/dhina11/image/upload/v1729283407/linkedin_kwxva4.png"
                  alt="LinkedIn"
                />
              </motion.div>
              <motion.div
                className="icon icon-2"
                whileHover={{ scale: 1.04, rotate: 15 }} // Rotate on hover
              >
                <img
                  src="https://res.cloudinary.com/dhina11/image/upload/v1729283490/instagram_lvx5d5.png"
                  alt="Instagram"
                />
              </motion.div>
              <motion.div
                className="icon icon-3"
                whileHover={{ scale: 1.04, rotate: 15 }} // Rotate on hover
              >
                <img
                  src="https://res.cloudinary.com/dhina11/image/upload/v1729283407/gmail_ikguoq.png"
                  alt="Gmail"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Section for Mobile */}
      <div className="hero_mobile">
        <motion.div
          className="img-div"
          initial={{ opacity: 0, x: 0 }} // Image slides in from right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 1 }}
        >
          <img
            src="https://res.cloudinary.com/dhina11/image/upload/v1729321620/New_mobile_xgpq9z.jpg"
            alt="Kiran Rup"
          />
        </motion.div>
        <motion.div
          className="details"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="details-child" variants={childVariants}>
            <motion.h3 variants={childVariants}>Hello, I'm</motion.h3>
            <motion.h1 variants={childVariants}>KIRAN RUP</motion.h1>
            <motion.p variants={childVariants}>
              JUNIOR ADVOCATE PRACTICING IN MADRAS HIGH COURT
            </motion.p>

            {/* Buttons */}
            <motion.div className="buttons" variants={childVariants}>
              <motion.button
                className="button-blue"
                whileHover={{ scale: 1.05 }} // Hover effect
                whileTap={{ scale: 0.95 }} // Tap effect
              >
                Download Resume
              </motion.button>
              <a href="#contact">
                <motion.button
                  className="button-transparent"
                  whileHover={{ scale: 1.05 }} // Hover effect
                  whileTap={{ scale: 0.95 }} // Tap effect
                >
                  Contact Us
                </motion.button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="icons" variants={childVariants}>
              <motion.div
                className="icon icon-1"
                whileHover={{ scale: 1.04, rotate: 15 }} // Rotate on hover
              >
                <img
                  src="https://res.cloudinary.com/dhina11/image/upload/v1729283407/linkedin_kwxva4.png"
                  alt="LinkedIn"
                />
              </motion.div>
              <motion.div
                className="icon icon-2"
                whileHover={{ scale: 1.04, rotate: 15 }} // Rotate on hover
              >
                <img
                  src="https://res.cloudinary.com/dhina11/image/upload/v1729283490/instagram_lvx5d5.png"
                  alt="Instagram"
                />
              </motion.div>
              <motion.div
                className="icon icon-3"
                whileHover={{ scale: 1.04, rotate: 15 }} // Rotate on hover
              >
                <img
                  src="https://res.cloudinary.com/dhina11/image/upload/v1729283407/gmail_ikguoq.png"
                  alt="Gmail"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
