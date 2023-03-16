import React, { useState, useEffect } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";

import { PriceCalculator } from "./PriceCalculator";

import "./style.css";

registerLicense(process.env.REACT_APP_SYNCFUSION);

const FindCar = (props) => {
  const [key, setKey] = useState("one-way");
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [price, setPrice] = useState(null);
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const startAutocomplete = new props.google.maps.places.Autocomplete(
      document.getElementById("start-input")
    );
    startAutocomplete.addListener("place_changed", () => {
      const place = startAutocomplete.getPlace();
      setStartAddress(place.formatted_address);
    });

    const endAutocomplete = new props.google.maps.places.Autocomplete(
      document.getElementById("end-input")
    );
    endAutocomplete.addListener("place_changed", () => {
      const place = endAutocomplete.getPlace();
      setEndAddress(place.formatted_address);
    });
  }, [props.google.maps.places.Autocomplete]);

  //   Start Address: 123 Main St, Anytown, USA
  // End Address: 456 Elm St, Another Town, USA

  function SubmitHandler(event) {
    event.preventDefault();
    const { google } = props;
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [startAddress],
        destinations: [endAddress],
        travelMode: "DRIVING",
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      },
      (response, status) => {
        if (status !== "OK") {
          console.log(`Error: ${status}`);
        } else {
          const distanceValue = response.rows[0].elements[0].distance.value;
          const durationValue = response.rows[0].elements[0].duration.value;
          setDistance(response.rows[0].elements[0].distance.text);
          setDuration(response.rows[0].elements[0].duration.text);
          setPrice(PriceCalculator(distanceValue, durationValue));
        }
      }
    );
  }


  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <section className="oniriqueride-find-area">
      <Container>
        <Row>
          <Col md={12}>
            <div className="find-box">
              <Row className="align-items-center">
                {/* This code need to configured  */}
                <Col md={4}>
                  <div className="find-text">
                    <h3>{t("search_best_car")}</h3>
                  </div>
                </Col>
                <Col md={8}>
                  <Tabs
                    id="tabs-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                  >
                    <Tab eventKey="one-way" title="One Way">
                      <div className="find-form">
                        <form onSubmit={SubmitHandler}>
                          <Row>
                            <Col md={4}>
                              <p>
                                <input
                                  id="start-input"
                                  defaultValue={startAddress}
                                  type="text"
                                  placeholder={t("from_address")}
                                />
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <input
                                  id="end-input"
                                  defaultValue={endAddress}
                                  type="text"
                                  placeholder={t("to_address")}
                                />
                              </p>
                            </Col>
                            <Col md={4}></Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <p>
                                <DatePickerComponent
                                  id="datepicker"
                                  placeholder={t("journey_date")}
                                ></DatePickerComponent>
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <TimePickerComponent
                                  id="timepicker"
                                  placeholder={t("journey_time")}
                                ></TimePickerComponent>
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <button
                                  type="submit"
                                  className="oniriqueride-theme-btn"
                                >
                                  {t("find_car")}
                                </button>
                              </p>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Tab>
                    <Tab eventKey="by-hour" title="By The Hour">
                      <div className="find-form">
                        <form onSubmit={SubmitHandler}>
                          <Row>
                            <Col md={4}>
                              <p>
                                <input
                                  id="start-input"
                                  defaultValue={startAddress}
                                  type="text"
                                  placeholder={t("from_address")}
                                />
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <TimePickerComponent
                                  id="timepicker"
                                  placeholder={t("duration")}
                                ></TimePickerComponent>
                              </p>
                            </Col>
                            <Col md={4}></Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <p>
                                <DatePickerComponent
                                  id="datepicker"
                                  placeholder={t("journey_date")}
                                ></DatePickerComponent>
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <TimePickerComponent
                                  id="timepicker"
                                  placeholder={t("journey_time")}
                                ></TimePickerComponent>
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <button
                                  type="submit"
                                  className="oniriqueride-theme-btn"
                                >
                                  {t("find_car")}
                                </button>
                              </p>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS,
})(FindCar);