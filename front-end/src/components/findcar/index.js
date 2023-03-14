import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";

import MapboxAutocomplete from "react-mapbox-autocomplete";
import axios from "axios";

import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";

import "./style.css";
import "./cutomStyle.css";

registerLicense(
  process.env.REACT_APP_SYNCFUSION
  );

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX;

async function getTripInfo(startAddress, endAddress) {
  try {
    // Convert start and end addresses to coordinates
    const startResponse = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        startAddress
      )}.json?access_token=${MAPBOX_API_KEY}`
    );
    const endResponse = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        endAddress
      )}.json?access_token=${MAPBOX_API_KEY}`
    );

    const startCoords = startResponse.data.features[0].center;
    const endCoords = endResponse.data.features[0].center;

    // Calculate trip distance, duration, and price
    const response = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?access_token=${MAPBOX_API_KEY}`
    );

    if (!response.data.routes || !response.data.routes[0]) {
      throw new Error("Invalid response from Mapbox API");
    }

    const distance = response.data.routes[0].distance * 0.000621371; // Convert meters to miles
    const duration = response.data.routes[0].duration / 60; // Convert seconds to minutes
    const price = distance * 1.314 + duration * 0.564; // Assuming a price of $1.314 per mile and a price of $0.564 per minute

    return { distance, duration, price };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while processing your request" };
  }
}

const FindCar = () => {
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [tripInfo, setTripInfo] = useState(null);

  const [key, setKey] = useState("one-way");

  const { t } = useTranslation();

  const handleStartAddressSelect = (address) => {
    setStartAddress(address);
  };

  const handleEndAddressSelect = (address) => {
    setEndAddress(address);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tripInfo = await getTripInfo(startAddress, endAddress);
    setTripInfo(tripInfo);
    console.log(tripInfo);
  };

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
                        <form onSubmit={handleSubmit}>
                          <Row>
                            <Col md={4}>
                                <MapboxAutocomplete
                                  publicKey={MAPBOX_API_KEY}
                                  inputClass="form-control"
                                  onSuggestionSelect={handleStartAddressSelect}
                                  country="us"
                                  resetSearch={false}
                                  type="text"
                                  placeholder={t("from_address")}
                                >
                                </MapboxAutocomplete>
                            </Col>
                            <Col md={4}>
                              <p>
                                <input
                                  type="text"
                                  placeholder={t("to_address")}
                                />
                              </p>
                            </Col>
                            <Col md={4}>
                              <p>
                                <select placeholder={t("SelectCar")}>
                                  <option>{t("ac_car")}</option>
                                  <option>{t("non_ac_car")}</option>
                                </select>
                              </p>
                            </Col>
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
                        <form onSubmit={handleSubmit}>
                          <Row>
                            <Col md={4}>
                              <p>
                                <input
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
                            <Col md={4}>
                              <p>
                                <select placeholder={t("SelectCar")}>
                                  <option>{t("ac_car")}</option>
                                  <option>{t("non_ac_car")}</option>
                                </select>
                              </p>
                            </Col>
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

export default FindCar;
