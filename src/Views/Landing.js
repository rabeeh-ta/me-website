import React from 'react';
import '../style.css';
import Typed from 'typed.js';

import githubLogo from '../img/github.svg';
import linkedinLogo from '../img/linkedin.svg';
import twitterLogo from '../img/twitter.svg';
import stackOverFlowLogo from '../img/stackoverflow.svg';
import instagramLogo from '../img/instagram.svg';

export default function Landing() {
  const typedJs = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(typedJs.current, {
      strings: ['Web', 'React.js', 'Vue.js', 'Flutter', 'Ardiono IOT', 'UI UX'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row hero-header" id="home">
        <h3>Things i do.</h3>

        <h1>
          "<span ref={typedJs}></span>"
        </h1>

        <a className="blog-btn" href="https://blog.rabeeh.ga">
          <span className="blog-btn-logo">
            <svg width="30" height="30" viewBox="0 0 337 337" fill="none">
              <rect
                x="113"
                y="113"
                width="111"
                height="111"
                rx="55.5"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
                fill="#2962FF"
              />
            </svg>
          </span>
          <span>Read My Blog</span>
        </a>

        <div className="social-section">
          <ul className="social-list">
            <li>
              <a href="https://github.com/rabeeh-ta">
                <img className="social-logo" src={githubLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/10303855/rabeeh-t-a?tab=profile">
                <img className="social-logo" src={stackOverFlowLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rabeeh_ta">
                <img className="social-logo" src={twitterLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rabeeh_ta/">
                <img className="social-logo" src={instagramLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rabeeh-t-a-93a55817b/">
                <img className="social-logo" src={linkedinLogo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
