import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";

import "./style.css";

import { UnitsConverter } from "./UnitsConverter";
import CarCategory from "./Wizard/CarCategory";
import Checkout from "./Wizard/Checkout";
import Options from "./Wizard/Options";
import Payment from "./Wizard/Payment";
import SignIn from "./Wizard/Signin";

const CarList = (props) => {
  const func = props.func;
  const units = UnitsConverter(func.distanceValue, func.durationValue);
  const navigationItems = [
    {
      id: 1,
      title: "Category",
    },
    {
      id: 2,
      title: "Options",
    },
    {
      id: 3,
      title: "Sign in",
    },
    {
      id: 4,
      title: "Payment",
    },
    {
      id: 5,
      title: "Checkout",
    },
  ];

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CarCategory units={units} nextStep={nextStep} />;
      case 2:
        return <Options nextStep={nextStep} previousStep={previousStep} />;
      case 3:
        return <SignIn nextStep={nextStep} previousStep={previousStep} />;
      case 4:
        return <Payment nextStep={nextStep} previousStep={previousStep} />;
      case 5:
        return <Checkout nextStep={nextStep} previousStep={previousStep} />;
      default:
        return <CarCategory nextStep={nextStep} />;
    }
  };

  console.log(units);

  const headerStyle = {
    backgroundColor: "rgb(210, 210, 210)",
    color: "#4f4f4f",
    textAlign: "center",
    padding: "5px 0 0px 0px",
    fontSize: "13px",
  };

  return (
    <section className="bar_70">
      {/* <CarCategory units={units} /> */}
      <Card>
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey={navigationItems[0].id}
            className="justify-content-center"
          >
            {navigationItems.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link
                  eventKey={item.id}
                  active={step === item.id}
                  onClick={() => setStep(item.id)}
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Card.Header>
        {/* Start header */}
        <Container fluid>
          <Row>
            <Col style={headerStyle}>
              <span>{func.formData.startAddress}</span>
              <span>{" >> "}</span>
              <span>{func.formData.endAddress}</span>
              <span>{" | "}</span>
              <span>
                Duration: {units.minutes.toFixed(0)} minutes – Distance:{" "}
                {units.miles.toFixed(0)} miles
              </span>
              <span>{" | "}</span>
              <span>Mar 19, 2023 3:50PM (15:50)</span>
            </Col>
          </Row>
        </Container>
        {/* End header */}
        <Card.Body>{renderStep()}</Card.Body>
      </Card>
    </section>
  );
};

export default CarList;
