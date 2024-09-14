import React, { useEffect } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom duration
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section with AOS Fade-In Effect */}
      <section className="hero" data-aos="fade-up">
        <h1>
          <Typewriter
            options={{
              strings: ['Hi, I\'m Aniket Kumar', 'A passionate developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Welcome to my personal portfolio website!</p>
      </section>

      {/* Intro Section with AOS Fade-In Effect */}
      <section className="intro" data-aos="fade-up">
        <p>I am currently pursuing B.Tech CSE with experience in Data Science and Machine Learning.</p>
        <p>I also have hands-on experience with Software Development like this web-portfolio and Network engineering.</p>
        <p>Check out my projects, blog, and feel free to contact me!</p>
      </section>

      {/* Placeholder for future content */}
      <section className="more-section" data-aos="fade-up">
        <h2>More Content Coming Soon</h2>
        <p>This is where you can add future sections like projects, blog, etc.</p>
      </section>
    </div>
  );
};

export default Home;
