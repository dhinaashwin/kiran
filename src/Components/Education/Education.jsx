import React from 'react';
import './Education.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="education-section" ref={ref} id="education">
      <h1>EDUCATION</h1>
      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Card 1 */}
        <motion.div 
          className="education-card"
          variants={cardVariants}
        >
          <h2 className="education-title">Post Graduate Degree</h2>
          <p>Degree: <span className="education-detail">Master of Law</span></p>
          <p>College: <span className="education-detail">Dr. Ambedkar Government Law College, Chennai</span></p>
          <p>Year: <span className="education-detail">2024-present</span></p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="education-card"
          variants={cardVariants}
        >
          <h2 className="education-title">Under Graduate Degree</h2>
          <p>Degree: <span className="education-detail">Bachelor Of Law and Commerce</span></p>
          <p>College: <span className="education-detail">Dr. Ambedkar Government Law College, Chennai</span></p>
          <p>Year: <span className="education-detail">2019-2024</span></p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="education-card"
          variants={cardVariants}
        >
          <h2 className="education-title">Higher Education</h2>
          <p>Course: <span className="education-detail">Commerce with Business Maths</span></p>
          <p>School: <span className="education-detail">Madras Christian College Higher Secondary School</span></p>
          <p>Year: <span className="education-detail">2018-2019</span></p>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          className="education-card"
          variants={cardVariants}
        >
          <h2 className="education-title">SSLC</h2>
          <p>Course: <span className="education-detail">State Board</span></p>
          <p>School: <span className="education-detail">Madras Christian College Higher Secondary School</span></p>
          <p>Year: <span className="education-detail">2016-2017</span></p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
