import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import "./css/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Get In Touch</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '720px' }}>
            Have a project in mind or want to learn more about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="row gy-5">
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h3 className="h4 fw-semibold text-dark mb-4">Contact Information</h3>

              <ul className="list-unstyled mb-4">
                <li className="d-flex mb-3">
                  <div className="me-3 text-primary"><Mail size={24} /></div>
                  <div>
                    <strong>Email</strong><br />
                    <a href="mailto:manojs103518@gmail.com" className="text-muted text-decoration-none">manojs103518@gmail.com</a>
                  </div>
                </li>
                <li className="d-flex mb-3">
                  <div className="me-3 text-primary"><Phone size={24} /></div>
                  <div>
                    <strong>Phone</strong><br />
                    <a href="tel:+919591049255" className="text-muted text-decoration-none">(+91) 9591049255</a>
                  </div>
                </li>
                <li className="d-flex mb-3">
                  <div className="me-3 text-primary"><MapPin size={24} /></div>
                  <div>
                    <strong>Location</strong><br />
                    <span className="text-muted">Mysore, Karnataka</span>
                  </div>
                </li>
              </ul>

              <h5 className="fw-medium text-dark mb-3">Follow Me</h5>
              <div className="d-flex gap-3">
              <a href="https://x.com/ManojS_35" className="text-dark"><i className="fa-brands fa-x-twitter fs-3 p-1"></i></a>
              <a href="https://github.com/ManojS35"  className="text-dark"><i className="fa-brands fa-github fs-3 p-1"></i></a>
              <a href="https://www.linkedin.com/in/manojs10/S_35"  className="text-dark"><i className="fa-brands fa-linkedin fs-3 p-1"></i></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-6">
            <div className="bg-white rounded shadow-sm p-4">
              <h3 className="h4 fw-semibold text-dark mb-4">Send Me a Message</h3>

              {submitSuccess ? (
                <div className="alert alert-success text-center">
                  <h5 className="mb-2">Message Sent Successfully!</h5>
                  <p className="mb-0">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      required className="form-control" placeholder="Your name" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      required className="form-control" placeholder="Your email" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                      required rows="5" className="form-control" placeholder="Your message"></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className={`btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2 ${isSubmitting ? 'disabled' : ''}`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
