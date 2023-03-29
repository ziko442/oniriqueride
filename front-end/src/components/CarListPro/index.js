import React from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";


import "./style.css";

import { UnitsConverter } from "./UnitsConverter";
import CarCategory from "./CarCategory";

const CarList = (props) => {
  const func = props.func;

  const units = UnitsConverter(func.distanceValue, func.durationValue);
  console.log(units);


  const headerStyle = {
    backgroundColor: "rgb(210, 210, 210)",
    color: "#4f4f4f",
    textAlign: "center",
    padding: "5px 0 0px 0px",
    fontSize: "13px"
  };





  return (
    <section className="bar_70">
  {/* Start header */}
  <Container fluid>
    <Row>
      <Col style={headerStyle}>
        <span>{func.formData.startAddress}</span>
        <span>{" >> "}</span>
        <span>{func.formData.endAddress}</span>
        <span>{" | "}</span>
        <span>Duration: {units.minutes.toFixed(0)} minutes – Distance: {units.miles.toFixed(0)} miles</span>
        <span>{" | "}</span>
        <span>Mar 19, 2023 3:50PM (15:50)</span>
      </Col>
    </Row>
  </Container>
  {/* End header */}

  <CarCategory units={units} />
</section>
  );
};

export default CarList;
