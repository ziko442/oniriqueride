import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

import "./style.css";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    axios
      .post("https://formspree.io/f/mrgvywqv", {
        name: form.elements.name.value,
        email: form.elements.email.value,
        subject: form.elements.subject.value,
        phone: form.elements.phone.value,
        message: form.elements.message.value,
      })
      .then((response) => {
        setStatus("success");
        form.reset();
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  const onClick = (e) => {
    e.preventDefault();
  }
  return (
    <section className="oniriqueride-contact-area section_70">
      <Container>
        <Row>
          <Col lg={7} md={6}>
            <div className="contact-left">
              
              {status === "success" ? (
                <h3>{t("contact_page.sent")}</h3>
              ) : (
                
                <form onSubmit={submitHandler}>
                  <h3>{t("contact_page.get_touch")}</h3>
                  <Row>
                    <Col md={6}>
                      <div className="single-contact-field">
                        <input
                          type="text"
                          name="name"
                          placeholder={t("contact_page.name")}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="single-contact-field">
                        <input
                          type="email"
                          name="email"
                          placeholder={t("contact_page.email")}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="single-contact-field">
                        <input
                          type="text"
                          name="subject"
                          placeholder={t("contact_page.subject")}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="single-contact-field">
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("contact_page.phone")}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="single-contact-field">
                        <textarea
                          name="message"
                          placeholder={t("contact_page.msg")}
                          defaultValue={""}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="single-contact-field">
                        <button
                          type="submit"
                          className="oniriqueride-theme-btn"
                        >
                          <FaPaperPlane /> {t("contact_page.send")}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              )}
            </div>
          </Col>
          <Col lg={5} md={6}>
            <div className="contact-right">
              <h3>{t("contact_page.info_title")} </h3>
              <div className="contact-details">
                {/* <p>
      <i className="fa fa-map-marker" /> 125 Big fella St. Road, New
      York, Hi 5654775{" "}
    </p> */}
                <div className="single-contact-btn">
                  <h4>{t("contact_page.info_email")}</h4>
                  <a href="mailto:contact@oniriqueride.com">contact@oniriqueride.com</a>
                </div>
                <div className="single-contact-btn">
                  <h4>{t("contact_page.info_call")}</h4>
                  <a href="tel:9297771386">(929) 777-1386</a>
                </div>
                <div className="social-links-contact">
                  <h4>{t("contact_page.info_follow")}</h4>
                  <ul>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="social-links-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <Link to="/">
                        <FaWhatsapp />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
