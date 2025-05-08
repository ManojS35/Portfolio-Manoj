import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import "./css/style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed-top ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'} transition`}>
      <nav className="container d-flex justify-content-between align-items-center px-3">
        <a href="#" className="fs-4 fw-bold text-primary">Manoj S</a>

        {/* Desktop Navigation */}
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-4">
          {['Home', 'Features', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-dark text-decoration-none px-2"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="btn btn-link d-md-none text-dark p-0"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="bg-white d-md-none border-top">
          <div className="container py-3">
            <ul className="list-unstyled">
              {['Home', 'Features', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-dark text-decoration-none"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
