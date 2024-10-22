import React from 'react';
import { FaComments, FaClock, FaPuzzlePiece, FaLightbulb, FaKeyboard, FaUserTie, FaUsers, FaSearch, FaPen } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './Skills.css';

const Skills = () => {
  // Define animations
  const skillAnimation = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: { opacity: 1, y: 0 },   // Final state
  };

  return (
    <section className='skills-section'>
      <h1>SKILLS</h1>
      <div className="skills-div">
        <div className="skills-left">
          <img src="https://res.cloudinary.com/dhina11/image/upload/v1729528991/IMG_1260_igntvq.jpg" alt="Skills" />
        </div>
        <div className="skills-right">
          <ul>
            {[
              { icon: <FaComments />, label: 'Communication' },
              { icon: <FaClock />, label: 'Time Management' },
              { icon: <FaPuzzlePiece />, label: 'Problem Solving' },
              { icon: <FaLightbulb />, label: 'Practical Thinking' },
              { icon: <FaKeyboard />, label: 'Certified Typing' },
              { icon: <FaUserTie />, label: 'Leadership' },
              { icon: <FaUsers />, label: 'Client Handling' },
              { icon: <FaSearch />, label: 'Research' },
              { icon: <FaPen />, label: 'Drafting' },
            ].map((skill, index) => (
              <motion.div
                className="skills-li-div"
                key={index}
                variants={skillAnimation} // Apply the animation
                initial="hidden" // Start with the hidden state
                animate="visible" // Animate to the visible state
                transition={{ duration: 0.5, delay: index * 0.15 }} // Animation duration and delay based on index
              >
                <span className="skills-icon">{skill.icon}</span>
                <li>{skill.label}</li>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
