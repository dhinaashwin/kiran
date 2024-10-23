import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AreaOfExpertise.css';

const AreaOfExpertise = () => {
  const [visibleExpertise, setVisibleExpertise] = useState(null);

  const expertiseData = [
    {
      title: "Criminal",
      image: "https://res.cloudinary.com/dhina11/image/upload/v1729505354/CLAW_d75bem.jpg",
      description: "Criminal law involves the prosecution and defense of individuals accused of committing crimes.",
      details: [
        "Defense Representation: Representing clients accused of crimes, including felonies and misdemeanors.",
        "Sentencing: Navigating sentencing guidelines and advocating for clients during sentencing hearings.",
        "Appeals: Handling appeals in criminal cases to challenge convictions or sentences.",
        "Negotiation: Engaging in plea bargaining to negotiate lesser charges or reduced sentences."
      ]
    },
    {
      title: "Civil",
      image: "https://res.cloudinary.com/dhina11/image/upload/v1729505355/CILAW_ha4a05.jpg",
      description: "Civil law encompasses legal disputes between individuals or entities that do not involve criminal charges.",
      details: [
        "Contract Law: Drafting, reviewing, and litigating contracts.",
        "Torts: Handling personal injury cases, negligence claims, and other tort actions.",
        "Family Law: Dealing with divorce, child custody, and related family matters.",
        "Real Estate: Addressing disputes related to property, leases, and zoning.",
        "Employment Law: Advising on employee rights, wrongful termination, and workplace discrimination."
      ]
    },
    {
      title: "Taxation",
      image: "https://res.cloudinary.com/dhina11/image/upload/v1729505361/TLAW_o2lu50.jpg",
      description: "Taxation law focuses on the legal aspects of tax obligations and regulations.",
      details: [
        "Tax Compliance: Advising individuals and businesses on compliance with federal, state, and local tax laws.",
        "Tax Planning: Developing strategies to minimize tax liability and optimize tax efficiency.",
        "Tax Disputes: Representing clients in disputes with tax authorities, including audits and appeals.",
        "International Taxation: Navigating tax issues related to international transactions and foreign investments.",
        "Estate Planning: Assisting clients with tax-efficient strategies for transferring wealth and managing estates."
      ]
    }
  ];

  const handleMoreInfo = (index) => {
    setVisibleExpertise(prevIndex => (prevIndex === index ? null : index)); // Toggle
  };

  return (
    <section className='expertise-section' id='AreaOfExpertise'>
      <div className="expertise-div">
        <h1>AREA OF EXPERTISE</h1>
        <div className="expertise-container">
          {expertiseData.map((expertise, index) => (
            <div className="expertise-item" key={index}>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity:1 }} 
                transition={{ duration: 0.3 }} 
              >
                {visibleExpertise !== index ? (
                  <>
                    <img src={expertise.image} alt={`${expertise.title} Law`} />
                    <h3>{expertise.title}</h3>
                    <p>{expertise.description}</p>
                    <button onClick={() => handleMoreInfo(index)}>More info</button>
                  </>
                ) : (
                  <>
                    <AnimatePresence>
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }} 
                        exit={{ opacity: 0, height: 0 }} 
                        transition={{ duration: 0.3 }}
                      >
                        {expertise.details.map((detail, detailIndex) => (
                          <motion.li 
                            key={detailIndex} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }} 
                            transition={{ duration: 0.2, delay: detailIndex * 0.25 }}
                          >
                            <strong>{detail.split(':')[0]}:</strong> {detail.split(':')[1]}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                    <button onClick={() => handleMoreInfo(index)}>Back</button>
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfExpertise;
