import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="footer-link">
          <div className="row pb-4">
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
            <div className="col-lg-2">
              <h5 className="heading pb-3">INFORMATION</h5>
              <ul className="mt-0 mb-0 ps-0 d-flex flex-column gap-2">
                <li className="name">
                  <a href="">About Store</a>
                </li>
                <li className="name">
                  <a href="">New Collection</a>
                </li>
                <li className="name">
                  <a href="">Woman Dress</a>
                </li>
                <li className="name">
                  <a href="">Contact Us</a>
                </li>
                <li className="name">
                  <a href="">Latest News</a>
                </li>
                <li className="name">
                  <a href="">Our Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="heading pb-3"> USEFUL LINKS</h5>
              <ul className="mt-0 mb-0 ps-0 d-flex flex-column gap-2">
                <li className="name">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="name">
                  <a href="">Returns</a>
                </li>
                <li className="name">
                  <a href="">Terms & Conditions</a>
                </li>
                <li className="name">
                  <a href="">Contact Us</a>
                </li>
                <li className="name">
                  <a href="">Latest News</a>
                </li>
                <li className="name">
                  <a href="">Our Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="heading pb-3">FOOTER MENU</h5>
              <ul className="mt-0 mb-0 ps-0 d-flex flex-column gap-2">
                <li className="name">
                  <a href="">Instagram profile</a>
                </li>
                <li className="name">
                  <a href="">New Collection</a>
                </li>
                <li className="name">
                  <a href="">Woman Dress</a>
                </li>
                <li className="name">
                  <a href="">Contact Us</a>
                </li>
                <li className="name">
                  <a href="">Latest News </a>
                </li>
                <li className="name">
                  <a href="">Purchase Theme</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="heading pb-3">ABOUT THE STORE</h5>
              <p>
                STORE - worldwide fashion store since 1978. We sell over 1000+
                branded products on our web-site.
              </p>
              <div className="address d-flex gap-2">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="icons pt-1"
                />
                <p>451 Wall Street, USA, New York</p>
              </div>
              <div className="phone d-flex gap-2 ">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="icons pt-1"
                />
                <p>Phone: (064) 332-1233</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="copy-right pb-4 pt-2">
            2019 Created by <a href="">The4 Studio</a>. Premium e-commerce
            solutions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
