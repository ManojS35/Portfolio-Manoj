import React from 'react';

const features = [
  {
    title: 'Responsive Design',
    description: 'Creating websites that work seamlessly across all devices and screen sizes.',
    icon: <i className="bi bi-phone fs-3 text-primary"></i>
  },
  {
    title: 'Modern UI/UX',
    description: 'Designing intuitive interfaces with a focus on user experience and accessibility.',
    icon: <i className="bi bi-palette fs-3 text-primary"></i>
  },
  {
    title: 'Performance Optimization',
    description: 'Building fast-loading applications with optimized code and assets.',
    icon: <i className="bi bi-speedometer2 fs-3 text-primary"></i>
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, well-documented code following best practices.',
    icon: <i className="bi bi-code-square fs-3 text-primary"></i>
  }
];

const Features = () => {
  return (
    <section id="features" className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">What I Do</h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
            I specialize in creating modern web applications with a focus on performance, usability, and clean code.
          </p>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="h5 card-title">{feature.title}</h3>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;