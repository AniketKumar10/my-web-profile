import React, { useEffect } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Companies from '../components/company-card';

const TYPEWRITER_STRINGS = [
  'Hi, I\'m Aniket Kumar ', 
  'A passionate developer ',
  'Tech Enthusiast ',
  'Problem Solver '
];

const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true
    });
  }, []);

  return (
    <div className="home-container">
      <section 
        className="hero" 
        data-aos="fade-up"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18, 18, 18, 0.9) 50%, rgba(18, 18, 18, 0.5)), 
            url('/profile-photo.jpg')
          `,
          backgroundPosition: 'right center',
          backgroundSize: 'cover, contain',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>
            <Typewriter
              options={{
                strings: TYPEWRITER_STRINGS,
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50
              }}
            />
          </h1>
          
          <p>Welcome to my personal portfolio website 📝</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about" id="about" data-aos="fade-up">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience in building web applications.
            I love learning new technologies and solving complex problems.
            My expertise spans across various programming languages and frameworks,
            with a strong focus on creating innovative and efficient solutions.
          </p>
          <a href="/about" className="btn btn-primary">Know More</a> {/* Link to the About page */}
        </div>
      </section>

       {/* Companies Section */}
      <section className="companies" id="companies" data-aos="fade-up">
        <h2>Companies I've Worked With</h2>
        <Companies />
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects" data-aos="fade-up">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
          <div className="project-item">
            <h3>Project 3</h3>
            <p>Description of project 3.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className="btn btn-primary">Email Me</a>
      </section>
    </div>
  );
};

export default Home;