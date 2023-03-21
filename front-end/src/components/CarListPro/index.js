import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
 
  FaWallet,
  FaUserFriends,
  FaClock,
  FaTimesCircle,
  FaMedal,
  FaPrescriptionBottleAlt
} from "react-icons/fa";

import "./style.css";
import "./customStyle.css";
import { calculatePrice } from "./PriceCalculator";

const CarList = (props) => {
  const func = props.func;

  const price = calculatePrice(func.distanceValue, func.durationValue);
  console.log(price);
  // const { t } = useTranslation();

  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  // const onClick = (e) => {
  //   e.preventDefault();
  // };

  const headerStyle = {
    backgroundColor: "rgb(210, 210, 210)",
    color: "#4f4f4f",
    textAlign: "center",
    padding: "5px 0 0px 0px",
    fontSize: "13px"
  };



  return (
    <section className="oniriqueride-car-listing section_70">
       {/* start header */}
      <Container fluid>
      <Row>
        <Col style={headerStyle}>
          <span className="shortened">{func.formData.startAddress}</span>
          <span className="shortened">{">>"}</span>
          <span className="shortened">{func.formData.endAddress}</span>
          <span className="shortened">|</span>
          <span className="shortened">Duration: {price.minutes.toFixed(0)} minutes – Distance: {price.miles.toFixed(0)} miles</span>
          <span className="shortened">|</span>
          <span className="shortened">Mar 19, 2023 3:50PM (15:50)</span>

        </Col>
      </Row>
        
      {/* end header */}
      </Container>
      <Container className="container-car-categ" >
          <div className="vehicle">
            <div className="vehicle-title">
              <div className="car-cat-title"> Business Class </div>
              <div className="vehicle-desc"> Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar </div>
              <div className="vehicle-capacity">
                <div className="vehicle-capacity-type">
                  <div className="float-start d-flex">
                     <FaWallet className="fa-icon"/>
                     <div>max. 3</div>
                  </div>
                </div>
                <div className="vehicle-capacity-type">
                  <div className="float-end d-flex">
                    <FaUserFriends className="fa-icon"/>
                    <div>max. 2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-0 col-12" style={{ height: '200px', justifyContent:'space-between' }} >
              <div className="vehicle-infos">
                <div className="vehicle-info-text mr-1 col-3">
                  <div className="d-flex vehicle-info-type">
                    <div className="float-start">
                      <FaClock className="v-info-icon" />
                    </div>
                    <div className="float-end mx-2 vehicle-info-example">
                      Free 60 minutes wait time for airport pickups, 15 mins for all others
                    </div>
                  </div>

                  <div className="d-flex vehicle-info-type">
                    <div className="float-start">
                      <FaMedal className="v-info-icon" />
                    </div>
                    <div className="float-end mx-2 vehicle-info-example">
                    Includes Meet &amp; Greet
                    </div>
                  </div>

                  <div className="d-flex vehicle-info-type">
                    <div className="float-start">
                      <FaTimesCircle className="v-info-icon" />
                    </div>
                    <div className="float-end mx-2 vehicle-info-example">
                    Free cancellation up until 1 hour before pickup
                    </div>
                  </div>

                  <div className="d-flex vehicle-info-type">
                    <div className="float-start">
                      <FaPrescriptionBottleAlt className="v-info-icon" />
                    </div>
                    <div className="float-end mx-2 vehicle-info-example">
                    Complimentary bottled water
                    </div>
                  </div>
                </div>
                <div className="vehicle-image col-5">
                  <div>
                    <Link to="/car-booking">
                      <img className="vehicle-image-ref" src="https://www.blacklane.com/assets/shared/vehicles/business_class-profile-medium.jpg" alt="offer 1" />
                    </Link>
                  </div>
                </div>
                <div className="vehicle-price-info col-4 mx-1 px-0">
                  <div className="card bg-card px-1">
                    <div className="card-body px-2">
                      <h5 className="card-subtitle mt-0 vh-price float-end" style={{ fontWeight:'bold' }}>{price.price.toFixed(2)} USD</h5>
                      <div className="card-text mb-3 float-end" style={{fontSize:'10px',display:'inline-block'}}>All prices include VAT, fees & tip.</div>
                      <button className="btn btn-select container">Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </section>
  );
};

export default CarList;
