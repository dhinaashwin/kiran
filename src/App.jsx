import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Contact from './Components/ContactMe/Contact';
import AreaOfExpertise from './Components/AreaOFExpertise/AreaOfExpertise';
import Achievements from './Components/Achievements/Achievements';
import Skills from './Components/Skills/Skills';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'; // Import LoadingScreen

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track if loading

  // Simulate loading delay or handle async actions (like fetching data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 2 seconds (simulate loading)
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  // Show the loading screen while the app is loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App relative">
      <Navbar />
      <Hero />
      <AboutMe />
      <AreaOfExpertise />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Contact /> 
    </div>
  );
}

export default App;
