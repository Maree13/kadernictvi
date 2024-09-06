import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  return (
    <header className="navbar-header">
      <p className="navbar-logo">M Visage</p>

      {/* Button that toggles between burger and cross icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}{' '}
        {/* Toggle icon based on isOpen state */}
      </button>

      <nav className={`navbar-navigation ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link">
          Intro
        </Link>
        <Link to="/aboutus" className="navbar-link">
          O nás
        </Link>
        <Link to="/contact" className="navbar-link">
          Kontakt
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
