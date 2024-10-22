import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css';

const AboutMe = () => {
  // Hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false,  // Set to false to trigger animation every time it's in view
    threshold: 0.2,      // Trigger the animation when 20% of the component is in view
  });

  return (
    <section className="about-me-section" ref={ref}>
      <div className="about-me-container">
        <motion.div
          className="about-me-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.2 }}
        >
          {/* Profile Image with Zoom-in Animation */}
          <motion.div
            className="about-me-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://res.cloudinary.com/dhina11/image/upload/v1729321620/New_mobile_xgpq9z.jpg"
              alt="Profile"
              className="profile-img"
            />
          </motion.div>

          {/* Text Content with Slide-up Animation */}
          <motion.div
            className="about-me-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1>About Me</h1>
            <p>
              I am a Bachelor of Law and Commerce graduate from Tamil Nadu Dr. Ambedkar Law University, driven by a passion for law and advocacy. I possess strong research skills for analyzing complex legal scenarios, social intelligence for effective communication, fluency in English and Tamil, and a deep interest in pursuing a judiciary career to make a meaningful impact through advocacy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
