import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="social-media d-flex gap-3 justify-content-center pt-5 pb-5">
          <a href="">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="footer-link pb-5">
          <div className="row">
            <div className="col-lg-2">
              <h5 className="heading pb-3">OUR STORES</h5>
              <ul className="mt-0 mb-0 ps-0 d-flex flex-column gap-2">
                <li className="name">
                  <a href="">Ha Noi</a>
                </li>
                <li className="name">
                  <a href="">New York</a>
                </li>
                <li className="name">
                  <a href="">London SF</a>
                </li>
                <li className="name">
                  <a href="">Los Angeles</a>
                </li>
                <li className="name">
                  <a href="">Chicago</a>
                </li>
                <li className="name">
                  <a href="">Las Vegas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
