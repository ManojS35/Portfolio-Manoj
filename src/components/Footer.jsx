import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import "./css/style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light text-white py-5 mt-5 border-top border-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h3 className="h5 mb-3 text-primary fs-3">Portfolio</h3>
            <p className="text-muted mb-4">
              Creating beautiful digital experiences with modern web technologies.
            </p>
          </div>
          
          <div className="col-lg-2">
            <h3 className="h5 mb-3 text-primary">Quick Links</h3>
            <ul className="list-unstyled">
              {['Home', 'Features', 'Projects', 'About', 'Contact'].map(item => (
                <li key={item} className="mb-2">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted text-decoration-none"
                  >
                    <i className="bi bi-chevron-right me-1"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h3 className="h5 mb-3 text-primary">Contact</h3>
            <ul className="list-unstyled text-muted">
              <li className="mb-2"><Mail size={24} /> manojs103518@gmail.com</li>
              <li className="mb-2"><Phone size={24} /> (+91) 9591049255</li>
              <li className="mb-2"><MapPin size={24} /> Mysore, Karnataka</li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h3 className="h5 mb-3 text-primary">Follow Me</h3>
            <p className="text-muted mb-2">Stay connected on social media</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted fs-5"><i className="bi bi-github"></i></a>
              <a href="#" className="text-muted fs-5"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-muted fs-5"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-muted mb-3 mb-md-0">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-muted text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;