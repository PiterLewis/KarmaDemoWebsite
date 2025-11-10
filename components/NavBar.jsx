import { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <span>K</span>
          </div>
          <span className="logo-text">KARMA</span>
        </div>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#formulario" className="navbar-link">Contact Us</a>
          </li>
          <li className="navbar-item">
            <a href="#linkCanva" className="navbar-link">Presentación</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
