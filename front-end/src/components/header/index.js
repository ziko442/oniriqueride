import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
  // FaSearch,
  FaGlobe,
} from "react-icons/fa";
import MobileMenu from "../../components/MobileMenu";

import Logo from "../../img/logo.png";
import globe from "../../img/globe.png";
import clock from "../../img/clock.png";
import "flag-icon-css/css/flag-icons.min.css";
import "./style.css";
import "./customStyle.css";

const languages = [
  {
    code: "fr",
    name: "français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "english",
    country_code: "us",
  },
  // {
  //   code: "pt",
  //   name: "português",
  //   country_code: "pt",
  // },
];

const Header = () => {
  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  // const onClick = (e) => {
  //   e.preventDefault();
  // };

  const { t } = useTranslation();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Fragment>
      <section className="oniriqueride-header-top-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="header-top-left">
                <p>
                  {t("need_help")} <FaPhoneAlt /> {t("call")}: +1 (917) 399-8691
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="header-top-right">
                {!token ? (
                  <Fragment>
                    <Link to="/login">
                      <FaSignInAlt />
                      {t("login")}
                    </Link>
                    <Link to="/register">
                      <FaUserAlt />
                      {t("register")}
                    </Link>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaGlobe /> {t("language")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {languages.map(({ code, name, country_code }) => (
                          <Dropdown.Item
                            eventKey={name}
                            key={country_code}
                            to="/"
                            onClick={() => i18next.changeLanguage(code)}
                          >
                            <span
                              className={`flag-icon flag-icon-${country_code}`}
                            ></span>{" "}
                            {name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Fragment>
                ) : (
                    <Fragment>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FaGlobe /> {t("language")}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {languages.map(({ code, name, country_code }) => (
                        <Dropdown.Item
                          eventKey={name}
                          key={country_code}
                          to="/"
                          onClick={() => i18next.changeLanguage(code)}
                        >
                          <span
                            className={`flag-icon flag-icon-${country_code}`}
                          ></span>{" "}
                          {name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <button
                  className="btn-logout"
                  onClick={handleLogout}
                  >
                  <FaSignOutAlt />
                {t("logout")}
                  </button>
                  </Fragment>
                )}

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <header className="oniriqueride-main-header-area">
        <Container>
          <Row>
            <Col md={3}>
              <div className="site-logo">
                <Link to="/">
                  <img src={Logo} alt="oniriqueride" />
                </Link>
              </div>
            </Col>
            <Col lg={6} sm={9}>
              <div className="header-promo">
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={globe} alt="globe" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Newyork, USA</h3>
                    <p>{t("melbourne_city")}</p>
                  </div>
                </div>
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={clock} alt="clock" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Monday to Friday</h3>
                    <p>9:00am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-lg-3">
              <div className="header-action">
                <Link to="/contact">
                  <FaPhoneAlt /> {t("request_call")}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </header>
      <section className="oniriqueride-mainmenu-area">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="mainmenu">
                <nav>
                  <ul id="oniriqueride_navigation">
                    <li>
                      <Link to="/">{t("header-navigation.home")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("header-navigation.about")}</Link>
                    </li>
                    <li>
                      {/* <Link to="/" onClick={onClick}> */}
                      <Link to="/service">
                        {t("header-navigation.service")}
                      </Link>
                      {/* <ul>
                        <li>
                          <Link to="/service">
                            {t("header-navigation.all_service")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-single">
                            {t("header-navigation.service_details")}
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      {/* <Link to="/" onClick={onClick}> */}
                      <Link to="/car-listing">
                        {t("header-navigation.cars")}
                      </Link>
                      <Link to="/car-listing-pro">
                        {t("header-navigation.cars")+" Pro"}
                      </Link>
                      {/* <ul>
                        <li>
                          <Link to="/car-listing">
                            {t("header-navigation.car_listing")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-booking">
                            {t("header-navigation.car_booking")}
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li>
                      <Link to="/gallery">
                        {t("header-navigation.gallery")}
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.shop")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/product">
                            {t("header-navigation.product")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-single">
                            {t("header-navigation.product_details")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/cart">
                            {t("header-navigation.shopping_cart")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/checkout">
                            {t("header-navigation.checkout")}
                          </Link>
                        </li>
                      </ul>
                    </li> 
                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.pages")}
                      </Link>
                  <ul>
                    <li>
                          <Link to="/blog">{t("header-navigation.blog")}</Link>
                    </li>
                    <li>
                          <Link to="/blog-single">
                            {t("header-navigation.blog_single")}
                          </Link>
                    </li>
                    <li>
                          <Link to="/error">
                            {t("header-navigation.not_found")}
                          </Link>
                    </li>
                    <li>
                          <Link to="/login">
                            {t("header-navigation.login")}
                          </Link>
                    </li>
                    <li>
                          <Link to="/register">
                            {t("header-navigation.register")}
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/contact">
                        {t("header-navigation.contact")}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <div className="main-search-right">
                <MobileMenu />
                <div className="header-cart-box">
                  {/* <div className="login dropdown">
                    <Link to="/cart" className="cart-icon" id="dropdownMenu1">
                      <span>2</span>
                    </Link>
                  </div> */}
                </div>
                {/* <div className="search-box">
                  <form onSubmit={SubmitHandler}>
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Header;
