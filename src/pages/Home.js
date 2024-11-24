import React, { useEffect } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Companies from "../components/company-card";

const TYPEWRITER_STRINGS = [
  "Hi, I'm Aniket Kumar ",
  "A passionate developer ",
  "Tech Enthusiast ",
  "Problem Solver ",
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
          backgroundPosition: "right center",
          backgroundSize: "cover, contain",
          backgroundRepeat: "no-repeat",
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
                deleteSpeed: 50,
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
            I am a passionate developer with experience in building web
            applications. I love learning new technologies and solving complex
            problems. My expertise spans across various programming languages
            and frameworks, with a strong focus on creating innovative and
            efficient solutions.
          </p>
          <a href="/about" className="btn btn-primary">
            Know More
          </a>{" "}
          {/* Link to the About page */}
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies" id="companies" data-aos="fade-up">
        <h2>Experienced with the following tools</h2>
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
      {/* Contact Section */}
      <section className="contact" id="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Let's connect and collaborate!</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aniket-kumar-7270b4225/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary social-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            href="https://github.com/AniketKumar10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary social-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a
            href="https://leetcode.com/u/AniketKumar10/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary social-btn"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 95 111"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-auto max-w-none"
            >
              <path
                d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.threads.net/@k_aniket_1.0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary social-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-threads"
              viewBox="0 0 16 16"
            >
              <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
