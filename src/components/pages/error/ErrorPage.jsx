/** @format */

import React from "react";
import NavHeader from "../../NavComponents/NavHeader";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="home-container white-bg-main">
      <div className="home-contents">
        <div className="home-padding">
          <div className="image-overlay">
            <img
              src="https://i.ibb.co/99HQGyt/ezyable-logo.png"
              alt="error"
              className="green-logo"
            />
          </div>
          <NavHeader />
          <div className="error-container">
            <img src="../images/errorImage.png" alt="error" />
            <h5>Sorry we can't find the page your looking for</h5>
            <button>
              {" "}
              <Link to="/" className="nav-links">
                Go Back
              </Link>{" "}
            </button>
          </div>

          <Footer colorState={true} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
