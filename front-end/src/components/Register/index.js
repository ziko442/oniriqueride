import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser, FaRegEnvelope } from "react-icons/fa";
import axios from "axios";

import "./style.css";

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/register", formData);
      console.log(response.data); // you can use the response here if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="oniriqueride-login-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>{t("register_page.singup")}</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.username")}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.email")}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FaRegEnvelope />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("register_page.password")}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <FaLock />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("register_page.c_password")}
                    name="c_password"
                    value={formData.c_password}
                    onChange={handleChange}
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  <p className="checkbox remember signup">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance"
                    />
                    <label htmlFor="Freelance">
                      <span />
                      {t("register_page.terms")}
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="oniriqueride-theme-btn">
                    {t("register_page.register_now")}
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/login">{t("register_page.have_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
