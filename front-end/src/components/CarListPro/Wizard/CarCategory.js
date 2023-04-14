import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import {
  FaWallet,
  FaUserFriends,
  FaClock,
  FaTimesCircle,
  FaPrescriptionBottleAlt,
  FaWifi,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import { PriceCalculator } from "../PriceCalculator";

export default function CarCategory(props) {
  const [data, setData] = useState([]);
  const car = props;




  useEffect(() => {
    axios
      .get("/api/car-categories/")
      .then((response) => {
        // console.log(response.data); // Debugging statement
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data[0]);

  const handleSelect = (id) => {
    const selectedItem = data.find(item => item._id === id);
    if (selectedItem ) {
      const price = PriceCalculator(
        selectedItem.costPerMile,
        selectedItem.costPerMinute,
        car.units.miles,
        car.units.minutes
      );
      // console.log(price); // Log the calculated price
      car.nextStep();
      car.updatePrice(price);
    } else {
      console.log("Selected item not found in data or missing price"); // Log an error message
    }
  };

   //   // Pass the value of PriceCalculator to the payment component
  //   const handleSelect = (value) => {
  //     // Find the selected item from the data array
  //     const selectedItem = data.find(item => item.value === value);

  //     car.nextStep;
  //     return <Payment price={selectedItem.value} />;
  // };

  return (
    <Container>
      {data.map((item) => (
        <Card key={item._id} className="mt-4">
          <Card.Body>
            <Row>
              <Col lg="12" md="12" xs="12">
                <Card.Title className="text-dark">{item.name}</Card.Title>
                <Card.Text className="text-dark">{item.description}</Card.Text>
                <Row className="mb-3">
                  <Col>
                    <div className="d-flex align-items-center">
                      <FaWallet className="fa-icon" />
                      <div className="ms-2">max. {item.maxLuggage}</div>
                      <div className="ms-2">/</div>
                      <FaUserFriends className="fa-icon ms-2" />
                      <div className="ms-2">max. {item.maxPassengers}</div>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* <hr /> */}
            </Row>
            <hr />
            <Row>
              <Col lg="4" md="12" xs="12">
                <div className="d-flex align-items-center mb-2">
                  <FaClock className="v-info-icon" />
                  <div className="ms-2">
                    Free 60 minutes wait time for airport pickups, 15 mins for
                    all others
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaWifi className="v-info-icon" />
                  <div className="ms-2">Includes WIFI</div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaTimesCircle className="v-info-icon" />
                  <div className="ms-2">
                    Free cancellation up until 1 hour before pickup
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaPrescriptionBottleAlt className="v-info-icon" />
                  <div className="ms-2">Complimentary bottled water</div>
                </div>
              </Col>

              <Col
                lg="4"
                className="d-flex justify-content-between align-items-start"
              >
                <div>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3001/${item.imageUrl}`}
                    style={{ width: "400px" }}
                  />
                </div>
              </Col>
              <Col lg="4" className="d-flex flex-column bg-light rounded p-3">
                <div className="p-2 text-center text-dark">
                  <h5 className="mb-0">
                    $
                    {PriceCalculator(
                      item.costPerMile,
                      item.costPerMinute,
                      car.units.miles,
                      car.units.minutes
                    )}
                  </h5>
                  <small className="text-muted">
                    All prices include VAT, fees & tip.
                  </small>
                </div>

                <div className="p-2 text-center">
                  <Button
                    variant="primary"
                    className="btn button-gradient btn-lg "
                    onClick={() => handleSelect(item._id)}
                  >
                    Select
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
