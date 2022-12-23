import React from "react";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="header">
      <div className="container-link">
        <a
          href="https://www.linkedin.com/in/carlos-g%C3%B3mez-057a0a24a/"
          className="btn linkedIn"
        >
          MyLinkedIn
        </a>
      </div>
      <div className="text-btn">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Welcome to</span>
            <span className="heading-primary-sub">Henry Dogs</span>
          </h1>
        </div>
        <div className="but">
          <a href="/home" className="btn btn-white btn-animated">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
