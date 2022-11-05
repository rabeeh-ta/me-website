import React from 'react';

import paceLabImg from '../img/projcard1.png';
import githubShowOffImg from '../img/projcard2.png';
import dallalStreetImg from '../img/projcard3.jpg';

export default function FeaturedProjects() {
  return (
    <div className="row me-row content-ct">
      <h2 className="row-title">Featured Projects.</h2>
      <div className="blog-post-section">
        <div className="card">
          <div className="card-header">
            <img src={paceLabImg} alt="" />
          </div>
          <div className="card-body">
            <h4>PACE LAB, one stop shop for CSE lab.</h4>
            <p>
              A site to share code files and other VTU computer science
              Engineering laboratory resources.
            </p>
          </div>
          <a className="blog-btn blog-btn-read" href="https://blog.rabeeh.ga">
            <span className="blog-btn-logo">
              <svg width="15" height="15" viewBox="0 0 337 337" fill="none">
                <rect
                  x="113"
                  y="113"
                  width="111"
                  height="111"
                  rx="55.5"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
                  fill="#2962FF"
                />
              </svg>
            </span>
            <span>Read More</span>
          </a>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={githubShowOffImg} alt="" />
          </div>
          <div className="card-body">
            <h4>The github show off!</h4>
            <p>
              A python CLI script with which you can print 10 letter Character
              on your github timeline.
            </p>
          </div>
          <a className="blog-btn blog-btn-read" href="https://blog.rabeeh.ga">
            <span className="blog-btn-logo">
              <svg width="15" height="15" viewBox="0 0 337 337" fill="none">
                <rect
                  x="113"
                  y="113"
                  width="111"
                  height="111"
                  rx="55.5"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
                  fill="#2962FF"
                />
              </svg>
            </span>
            <span>Read More</span>
          </a>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={dallalStreetImg} alt="" />
          </div>
          <div className="card-body">
            <h4>DallalStreet Extension.</h4>
            <p>
              A Chrome extension stock picking tool, one click search on all the
              popular stock analyzing websites like Sceener, Tickertape,
              Trendlyne, Tradingview and others.
            </p>
          </div>
          <a className="blog-btn blog-btn-read" href="https://blog.rabeeh.ga">
            <span className="blog-btn-logo">
              <svg width="15" height="15" viewBox="0 0 337 337" fill="none">
                <rect
                  x="113"
                  y="113"
                  width="111"
                  height="111"
                  rx="55.5"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
                  fill="#2962FF"
                />
              </svg>
            </span>
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  );
}
