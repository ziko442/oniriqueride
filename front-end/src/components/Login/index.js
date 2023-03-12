import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser } from "react-icons/fa";
import axios from "axios";

import "./style.css";

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/login", { email: username, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      // redirect to the dashboard or any other page
      window.location.href = "/";
    } catch (error) {
      setErrorMessage(error.response.data.message);
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
                <h3>{t("login_page.singin")}</h3>
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={handleFormSubmit}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("login_page.user_email")}
                    name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("login_page.password")}
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  <p className="lost-pass">
                    <Link to="/">{t("login_page.f_password")}</Link>
                  </p>
                  <p className="checkbox remember">
                    <input className="checkbox-spin" type="checkbox" id="Freelance" />
                    <label htmlFor="Freelance">
                      <span />
                      {t("login_page.keep")}
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="oniriqueride-theme-btn">
                    {t("login_page.btn")}
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/register">{t("login_page.need_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
