import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Navigation Bar Start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="text-main font-500">Tech Group</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Our Group
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navigation Bar End */}

      {/* Top Banner Section */}
      <div className="top-banner container mt-5">
        <div className="col-md-10  mx-auto">
          <div className="top-banner-content p-5 bg-main text-center text-white">
            <h1 className="mb-3"> Make Your Dream Tech Team</h1>
            <p className="mb-4">
              Popular Tech Youtubers will help and guide the best products for
              the consumers
            </p>
            <h2> Total Budget : $250,000</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
