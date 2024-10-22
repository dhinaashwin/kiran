import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const experienceData = [
  {
    title: "Advocate S. Sivaraman",
    duration: "2022 - 2024 (Duration: 2 years)",
    description: "From Madras and Puducherry Bar council having experience of more than 20 years in practice before the Hon’ble High Courts, Lower Courts, and Tribunals.",
    icon: "fas fa-briefcase"
  },
  {
    title: "SS LAW FIRM, Advocate S. Saravanan",
    duration: "Aug 2022 - Jan 2023 (Duration: 6 months)",
    description: "From Madras and Puducherry Bar council having experience of 21 years in practice before the Hon’ble High Courts, Lower Courts, and Tribunals.",
    icon: "fas fa-user-tie"
  },
  {
    title: "Ram Gokul Advocates & Associates",
    duration: "May 2023 - Oct 2023 (Duration: 6 months)",
    description: "Advocate G.M. Gokulram, young and budding advocate specialised in the field of Family, Criminal, and Corporate matters.",
    icon: "fas fa-balance-scale"
  },
  {
    title: "Office of Public Prosecutor",
    duration: "Nov 2023 - Jan 2024 (Duration: 3 months)",
    description: "Assistant Public Prosecutor Joseph Selvam, in the portfolio of Quash and Bail at the Madras High Court.",
    icon: "fas fa-gavel"
  },
  {
    title: "Hon’ble Justice R. Mahadevan",
    duration: "Feb 2024 (Duration: 1 month)",
    description: "Madras High Court judge, primarily focusing on taxation and constitution.",
    icon: "fas fa-gavel"
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="experience-section" ref={ref} id="experience">
      <h1>EXPERIENCE</h1>

      <motion.div
        className="experience-web"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="experience-container">
          {experienceData.map((item, index) => (
            <motion.div
              className="experience-item"
              key={index}
              variants={itemVariants}
            >
              <div className="experience-card">
                <div className="experience-card-front">
                  <h3>{item.title}</h3>
                  <span>{item.duration}</span>
                </div>
                <div className="experience-card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="experience-mobile"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="experience-container">
          {experienceData.map((item, index) => (
            <motion.div
              className="experience-item"
              key={index}
              variants={itemVariants}
            >
              <div className="experience-mobile-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
