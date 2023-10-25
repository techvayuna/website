import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Mobile.css';
import image from './logo.png';
import video from './back.mp4';
import frame1 from './Frame 1.png';
import poster1 from './poster (1).jpg';
import poster2 from './poster (2).jpg';
import poster3 from './poster (3).jpg';
import poster4 from './poster (4).jpg';
import poster5 from './poster (5).jpg';
import poster6 from './poster (6).jpg';
import poster7 from './poster (7).jpg';
import insta from './insta.png';
import link from './link.png';
import twitter from './twitter.png';

function MobileComponent() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleSubmit = async () => {
    const form = document.getElementById('registration-form1');
    const responseElement = document.getElementById('submission-response1');

    if (form) {
      const formData = new FormData(form);

      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycby26jdiGN04kfjQpPprxUnQEasH4q7Av1EpwfoiuSMHipeZT4l4eDsbj1bc0acs-xys/exec',
          {
            method: 'POST',
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();

          if (result.result === 'success') {
            responseElement.textContent = 'Form submitted successfully!';
            responseElement.classList.add('success-message');
          } else {
            responseElement.textContent = 'Form submission failed.';
            responseElement.classList.add('error-message');
          }
        } else {
          responseElement.textContent = 'Server request failed.';
          responseElement.classList.add('error-message');
        }
      } catch (error) {
        responseElement.textContent = 'An error occurred.';
        responseElement.classList.add('error-message');
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const formRef = useRef(null); // Create a ref for the form section

  useEffect(() => {
    // Function to scroll to the form
    const scrollToForm = () => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Check if the URL contains #formRef
    if (window.location.hash === '#formRef') {
      scrollToForm(); // Scroll to the form if the URL contains #formRef
    }
  }, []);
  return (
    <Router>
      <div className="App1">
      <div className="scroll-button">
          <a href="#events1" className="button-link" onClick={scrollToForm}>
            Event Registration
          </a>
        </div>
        <div className="background-video-container1">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay1">
            <header>
              <img src={image} alt="TechVayuna" />
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#about1">About</a>
                  </li>
                  <li>
                    <a href="#registration-form">Events Registration</a>
                  </li>
                  <li>
                    <a href="/projects1">Join Us</a>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
        <div className="middle1">
          <div className="middle-center1">
            <h1>
              <span className="start1">Welcome to &lt;&lt;</span>
              <span className="MidlleText1">TechVayuna&gt;&gt;</span>
            </h1>
            Innovate . Tinker . Create!
          </div>
        </div>
        <div className="container11">
          <div className="about-us1">
            <h2>About Us</h2>
          </div>
          <div className="about-us-content1">
            <p className="about1" id="about1">
              The 'T' of TechVayuna at SRM University stands for innovation, technology, and excellence. Our Institute Technical Council is dedicated to addressing all things tech-related within the club. Student Tech forms a fundamental pillar of TechVayuna, where we cultivate a culture that empowers young minds to explore and execute groundbreaking ideas.
              We are committed to ensuring that your innovative ideas are not only heard but also actively supported. Our mission is to help you turn those ideas into reality in every conceivable way. Whether it's through workshops, hackathons, or collaborative projects, TechVayuna is your platform for tech-driven aspirations.
              Join us on this exciting journey where we combine passion and technology to create a vibrant and dynamic tech community. TechVayuna Club is where your dreams and ambitions find the perfect environment to thrive and prosper. Welcome to a world of endless possibilities, innovation, and limitless growth!
            </p>
          </div>
        </div>
        <div className="pastEvents1">
          <h2>Past Events</h2>
          <div className="Frame11">
            <img src={frame1} alt="frame1" />
          </div>
          <div className="poster11">
            <ul>
              <li><img src={poster1} alt="poster1" /></li>
              <li><img src={poster2} alt="poster2" /></li>
              <li><img src={poster3} alt="poster3" /></li>
              <li><img src={poster4} alt="poster4" /></li>
              <li><img src={poster5} alt="poster5" /></li>
              <li><img src={poster6} alt="poster6" /></li>
              <li><img src={poster7} alt="poster7" /></li>
            </ul>
          </div>
        </div>
       
        <div className="container21">
          <div className="About-Event1">
            <h2>Code Red 2.0</h2>
            "Code Red 2.0 represents the second edition of this highly anticipated event, building on the resounding success of the inaugural gathering."
            "Attendees can look forward to a dynamic platform that caters to both AI beginners and enthusiasts, providing opportunities for skill development and innovation."
            "The event serves as a unique opportunity to explore the ever-evolving world of artificial intelligence and foster a spirit of technological exploration."
            "Join us as we delve into the world of AI, learn from industry experts, and compete for prizes that recognize your technical prowess."
            "Code Red 2.0 is where innovation meets competition, making it a must-attend event for tech-savvy students at SRM University."
          </div>
          <h2 className="code-red-heading1">Register here</h2>

          <div className="registration-form" id="events" ref={formRef}>
            <form id="registration-form" noValidate>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="Name" required />
              <label htmlFor="email"   >Email:</label>
              <input type="email" id="email" name="Email" required />
              <label htmlFor="mobile">Mobile Number:</label>
              <input type="tel" id="Mobile Number" name="Mobile Number" required />
              <label htmlFor="address">Reg No:</label>
              <input type="text" id="Number" name="Reg" required />
              <label htmlFor="department">Department:</label>
              <input type="text" id="department" name="Department" required />
              <label htmlFor="section">Section:</label>
              <input type="text" id="section" name ="section" required />
              <label htmlFor="year">Year:</label>
              <input type="text" id="year" name="Year" required />
              <button id="submit-button" type="button" onClick={handleSubmit} >
                Submit
              </button>
            </form>
            <div id="submission-response1" className="submission-response1"></div>
          </div>
        </div>
        <div className="footer1" ref={formRef}>
          Join us on
          <ul>
            <li>
              <a href="https://instagram.com/tech_vayuna?igshid=MzRlODBiNWFlZA==">
                <img src={insta} alt="insta" />
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/techvayuna/">
                <img src={link} alt="LinkedIn" />
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default MobileComponent;
