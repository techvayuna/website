import React, { useState } from 'react';
import './App.css';
import image from './logo.png';
import video from './back.mp4';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.png';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import insta from './insta.png';
import link from './link.png';
import twitter from './twitter.png';
import frame1 from './Frame 1.png';
import poster1 from './poster (1).jpg';
import poster2 from './poster (2).jpg';
import poster3 from './poster (3).jpg';
import poster4 from './poster (4).jpg';
import poster5 from './poster (5).jpg';
import poster6 from './poster (6).jpg';
import poster7 from './poster (7).jpg';

function DesktopComponent() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionError, setSubmissionError] = useState(false);

  const handleSubmit = async () => {
    const form = document.getElementById('registration-form');
    const formData = new FormData(form);
    const email = formData.get('Email');

    if (form.checkValidity() && email.endsWith('@srmist.edu.in')) {
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
            setSubmissionMessage('Form submitted successfully!');
          } else {
            setSubmissionMessage('Form submission failed.');
            setSubmissionError(true);
          }
        } else {
          setSubmissionMessage('Server request failed.');
          setSubmissionError(true);
        }
      } catch (error) {
        setSubmissionMessage('An error occurred.');
        setSubmissionError(true);
      }
    } else {
      setSubmissionMessage('Please fill out the form correctly and use an email ending with @srmist.edu.in.');
      setSubmissionError(true);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div className="App">
      <div className="background-video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>

        <header>
          <div id="mobile-menu" className={`mobile-menu ${mobileMenuActive ? 'active' : ''}`}>
            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>

          <img src={image} alt="TechVayuna" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#registration-form">Events Registration</a>
            </li>
            <li>
              <a href="/projects">Join Us</a>
            </li>
          </ul>
        </header>
      </div>
      <div className="middle">
        <div className="middle-center">
          <h1>
            <span className="start">Welcome to &lt;&lt;</span>
            <span className="MidlleText">TechVayuna&gt;&gt;</span>
          </h1>
          Innovate . Tinker . Create!
        </div>
      </div>
      <div className="container1">
        <div className="about-us">
          <h2>About Us</h2>
        </div>
        <div className="about-us-content">
          <p className="about" id="about">
            The 'T' of TechVayuna at SRM University stands for innovation, technology, and excellence. Our Institute Technical Council is dedicated to addressing all things tech-related within the club. Student Tech forms a fundamental pillar of TechVayuna, where we cultivate a culture that empowers young minds to explore and execute groundbreaking ideas.
            We are committed to ensuring that your innovative ideas are not only heard but also actively supported. Our mission is to help you turn those ideas into reality in every conceivable way. Whether it's through workshops, hackathons, or collaborative projects, TechVayuna is your platform for tech-driven aspirations.
            Join us on this exciting journey where we combine passion and technology to create a vibrant and dynamic tech community. TechVayuna Club is where your dreams and ambitions find the perfect environment to thrive and prosper. Welcome to a world of endless possibilities, innovation, and limitless growth!
          </p>
        </div>
      </div>
      <div className="pastEvents">
        <h2>Past Events</h2>
        <div className="Frame1">
          <img src={frame1} alt="frame1" />
        </div>
        <div className="poster1">
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
      <div className="flip-container"></div>
      <div className="container2">
        <div className="About-Event">
          <h2>Code Red 2.0</h2>
          "Code Red 2.0 represents the second edition of this highly anticipated event, building on the resounding success of the inaugural gathering."
          "Attendees can look forward to a dynamic platform that caters to both AI beginners and enthusiasts, providing opportunities for skill development and innovation."
          "The event serves as a unique opportunity to explore the ever-evolving world of artificial intelligence and foster a spirit of technological exploration."
          "Join us as we delve into the world of AI, learn from industry experts, and compete for prizes that recognize your technical prowess."
          "Code Red 2.0 is where innovation meets competition, making it a must-attend event for tech-savvy students at SRM University."
        </div>
        <div className="registration-form" id="events">
          <h2 className="code-red-heading">Register here</h2>
          <form id="registration-form" noValidate>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="Name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="Email" required />
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="tel" id="Mobile Number" name="Mobile Number" required />
            <label htmlFor="address">Reg No:</label>
            <input type="text" id="Number" name="Reg" required />
            <label htmlFor="department">Department:</label>
            <input type="text" id="department" name="Department" required />
            <label htmlFor="section">Section:</label>
            <input type="text" id="section" name="Section" required />
            <label htmlFor="year">Year:</label>
            <input type="text" id="year" name="Year" required />
            <button id="submit-button" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          {submissionMessage && (
            <div id="submission-response" className={submissionError ? 'error-message' : 'success-message'}>
              {submissionMessage}
            </div>
          )}
        </div>
      </div>
      <div className="footer">
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
              <img src={link} alt="Twitter" />
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DesktopComponent;
