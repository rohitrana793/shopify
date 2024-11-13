import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhone,
  faUser,
  faMagnifyingGlass,
  faHeart,
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <div className="top-header py-2 text-light">
        <div className="container">
          <div className="top-nav">
            <div className="number d-flex align-items-center gap-1 text">
              <FontAwesomeIcon icon={faSquarePhone} /> OUR PHONE NUMBER:{" "}
              <span>+77 (756) 334 876</span>
            </div>
            <div className="link">
              <ul className="text d-flex gap-4  mt-0 mb-0 ">
                <li className="line">
                  <a href="">
                    <FontAwesomeIcon icon={faUser} className="icon pe-2" />
                    MY ACCOUNT
                  </a>
                </li>
                <li className="line">
                  <a href="">CART</a>
                </li>
                <li className="line">
                  <a href="">OUR LOCATION</a>
                </li>
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header py-4">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
              <ul className="d-flex ps-0 gap-4 mt-0 mb-0">
                <li>
                  <a href="" className="d-flex gap-1 align-items-center">
                    HOME
                    <FontAwesomeIcon icon={faChevronDown} className="symbol" />
                  </a>
                </li>
                <li>
                  <a href="" className="d-flex gap-1 align-items-center">
                    SHOP
                    <FontAwesomeIcon icon={faChevronDown} className="symbol" />
                  </a>
                </li>
                <li>
                  <a href="" className="d-flex gap-1 align-items-center">
                    BLOG
                    <FontAwesomeIcon icon={faChevronDown} className="symbol" />
                  </a>
                </li>
                <li>
                  <a href="" className="d-flex gap-1 align-items-center">
                    PAGES
                    <FontAwesomeIcon icon={faChevronDown} className="symbol" />
                  </a>
                </li>
                <li>
                  <a href="" className="d-flex gap-1 align-items-center">
                    FEATURES
                    <FontAwesomeIcon icon={faChevronDown} className="symbol" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <a href="">
                <img
                  src="//new-basel2.myshopify.com/cdn/shop/files/logo-basel.svg?v=11944076954395008056"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-4 d-flex  justify-content-between align-items-center">
              <a href="" className="login ms-5 ps-4">
                Login / Register
              </a>
              <div className="search d-flex gap-4">
                <a href="">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faHeart} className="icon2" />
                  <div className="circle">0</div>
                </a>
                <a href="" className="cart d-flex gap-2 align-items-center ">
                  <FontAwesomeIcon icon={faCartShopping} className="icon" />{" "}
                  <span>
                    <a href="" className="text">
                      0 / <strong>$0.00</strong>
                    </a>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
