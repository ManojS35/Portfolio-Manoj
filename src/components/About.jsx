import React from 'react';

const skills = [
  'JavaScript','Java', 'React', 
  'HTML5', 'CSS3', 'Bootstrap', 'Node.js',
  'SQL', 'MongoDB', 'Express.js',
  'Git', 'RESTful APIs', 'Responsive Design'
];

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Developer at work" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <p className="lead mb-4">
            I'm a full-stack web developer with experience in building responsive, scalable applications using technologies like React.js, Node.js, Express.js, and MongoDB. I focus on delivering clean, user-friendly interfaces backed by efficient backend systems, blending technical skill with an eye for design to create seamless user experiences.
            </p>
            <p className="lead mb-4">
              I'm also an active competitive programmer with a solid grasp of data structures and algorithms. I’ve solved over 700 problems across platforms and achieved a peak LeetCode rating of 1823, with a highest global rank of 2035. This background strengthens my ability to write optimized, maintainable code under pressure.
            </p>
            
            <div className="mb-4">
              <h3 className="h4 mb-3">My Skills</h3>
              <div className="d-flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="badge bg-light text-dark p-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;