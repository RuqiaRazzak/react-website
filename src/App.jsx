import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/download (2).png';


export default function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [submitted, setSubmitted] = useState(false);
const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Add mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          My Website
        </div>
              <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
         <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>


      </header>

      <section id="home" className="hero-section">
        <h1>Welcome to My Website</h1>
        <p>
          AI Overview Learn more Responsive web design allows websites to adapt
          and render effectively on various devices and screen sizes by using
          flexible grids, flexible images, and CSS media queries. Examples of
          websites that effectively utilize responsive design include Dribbble,
          Spotify, Dropbox, and Apple.
        </p>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We specialize in creating fast, modern, and user-friendly websites.
          Building beautiful and responsive websites with React.js, HTML, and
          CSS in the middle of the night.
        </p>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="card-container">
          <div className="card">
            <h3>Web Design</h3>
            <p>Beautiful, responsive, and modern designs.</p>
          </div>
          <div className="card">
            <h3>React Development</h3>
            <p>Fast, scalable, and interactive React apps.</p>
          </div>
          <div className="card">
            <h3>Mobile Friendly</h3>
            <p>Optimized for all device sizes and screens.</p>
          </div>
          <div className="card">
            <h3>HTML</h3>
            <p>Clean, semantic HTML structure for accessibility and SEO.</p>
          </div>
          <div className="card">
            <h3>JavaScript</h3>
            <p>Dynamic and interactive features using vanilla JS or frameworks.</p>
          </div>
          <div className="card">
            <h3>Firebase</h3>
            <p>Realtime databases, hosting, and authentication.</p>
          </div>
          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Design interfaces that are user-centered and visually appealing.</p>
          </div>
          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Improve search engine ranking and visibility.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <div className="contact-card">
          {submitted ? (
            <p className="success-msg">🎉 Thank you! Your message has been sent.</p>
          ) : (
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message 🚀</button>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
