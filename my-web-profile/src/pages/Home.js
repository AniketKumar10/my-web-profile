import React from 'react';
import './Home.css';
import '../components/Skills';

const Home = () => {
  return (
    <div className="home-container"> {/* Parent div */}
      <div id="particles-js"></div>
      <section className="hero">
        <h1>Hi, I'm Aniket Kumar</h1>
        <p>Welcome to my personal portfolio website!</p>
      </section>

      <section className="intro">
        <p>I am curretly persuing B.Tech CSE with experience in Data Science and Machine Learning.</p>
        <p>I also
          have hands-on experience with Software Developement like this web-portfolio and Network engineering.</p>
        <p>Check out my projects, blog, and feel free to contact me!</p>
      </section>
    </div> // Closing parent div
  );
};

export default Home;
