import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A responsive e-commerce frontend clone with product listings and a shopping cart interface, mimicking the layout and behavior of Amazon.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['HTML', 'CSS', 'JS'],
    liveLink: '#',
    repoLink: 'https://github.com/ManojS35/Amazon-Clone',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A real-time weather dashboard built with React, featuring live data from open APIs, dynamic icons, and condition-based UI styling.',
    image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'API', 'Material UI'],
    liveLink: '#',
    repoLink: 'https://github.com/ManojS35/Delta/tree/main/React/Material%20UI/mini-project-react',
  },
  {
    id: 3,
    title: 'Full-Stack Booking System',
    description: 'A complete booking platform with secure user authentication, real-time booking.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Node.js', 'EJS', 'Express.js', 'Passport.js', 'MongoDB'],
    liveLink: 'https://wanderlust-y7do.onrender.com',
    repoLink: 'https://github.com/ManojS35/Wanderlust',
  },
  {
    id: 4,
    title: 'Full-Stack Trading System',
    description: 'A real-time trading web application featuring live market data, user portfolio management, and secure authentication. Includes order placement, transaction history, and dynamic chart visualization for asset tracking.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React.js', 'Bootstrap', 'Express.js', 'Node.js', 'MongoDB'],
    liveLink: '#',
    repoLink: 'https://github.com/ManojS35/Trading-Platform',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">My Projects</h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
            Here are some of my recent projects showcasing my skills and experience in web development.
          </p>
        </div>
        
        <div className="row g-4">
          {projects.map(project => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card h-100 shadow-sm">
                <div className="overflow-hidden" style={{height: '200px'}}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-img-top h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="badge bg-primary bg-opacity-10 text-primary me-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a href={project.liveLink} className="btn btn-sm btn-primary">Live Demo</a>
                    <a href={project.repoLink} className="btn btn-sm btn-outline-secondary">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;