import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="px-5 py-5 mt-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">
            Building Beautiful, <span className="text-primary">Responsive Digital Experiences</span>
            </h1>
            <p className="lead mb-4">
              Bringing ideas to life through beautiful, functional web experiences.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="#projects" className="btn btn-primary">
                View Projects <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#contact" className="btn btn-outline-primary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Developer workspace" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;