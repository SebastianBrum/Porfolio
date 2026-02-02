import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';

import { useState, useRef } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  }

  const projects = useRef();
  const contact = useRef();

  return(
    <>
      {isOpen ? 
      <MobileMenu toggleMenu={toggleMenu} about='#about' contact='#contact' projects='#projects'/> :
      <>
      <Navbar toggleMenu={toggleMenu} about='#about' contact='#contact' projects='#projects'/>
      <Hero projects='#projects' contact='#contact'/>
      <About id='about'/>
      <FeaturedProjects id='projects'/>
      <Contact id='contact'/>
      </>
       }
    </>
  );
}

export default App