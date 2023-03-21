import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
  FaWallet,
  FaUserFriends,
  FaClock,
  FaTimesCircle,
  FaMedal,
  FaPrescriptionBottleAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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

  console.log(data[0]);

  return (
    <div>
      {data.map((item) => (
        <Container className="container-car-categ" key={item._id}>
          <div className="vehicle">
            <div className="vehicle-title">
              <div className="car-cat-title"> {item.name}</div>
              <div className="vehicle-desc">
                {" "}
                {item.description}{" "}
              </div>
              <div className="vehicle-capacity">
                <div className="vehicle-capacity-type">
                  <div className="float-start d-flex">
                    <FaWallet className="fa-icon" />
                    <div>max. {item.maxLuggage}</div>
                  </div>
                </div>
                <div className="vehicle-capacity-type">
                  <div className="float-end d-flex">
                    <FaUserFriends className="fa-icon" />
                    <div>max. {item.maxPassengers}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-0 col-12"
              style={{ height: "200px", justifyContent: "space-between" }}
            >
              <div className="vehicle-infos">
                <div className="vehicle-info-text mr-1 col-3">
                  <div className="d-flex vehicle-info-type">
                    <div className="float-start">
                      <FaClock className="v-info-icon" />
                    </div>
                    <div className="float-end mx-2 vehicle-info-example">
                      Free 60 minutes wait time for airport pickups, 15 mins for
                      all others
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
                      <img
                        className="vehicle-image-ref"
                        src={'http://localhost:3001/'+item.imageUrl}
                        alt="offer 1"
                      />
                    </Link>
                  </div>
                </div>
                <div className="vehicle-price-info col-4 mx-1 px-0">
                  <div className="card bg-card px-1">
                    <div className="card-body px-2">
                      <h5
                        className="card-subtitle mt-0 vh-price float-end"
                        style={{ fontWeight: "bold" }}
                      >
                        {car.price} USD
                      </h5>
                      <div
                        className="card-text mb-3 float-end"
                        style={{ fontSize: "10px", display: "inline-block" }}
                      >
                        All prices include VAT, fees & tip.
                      </div>
                      <button className="btn btn-select container">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </div>
  );
}
