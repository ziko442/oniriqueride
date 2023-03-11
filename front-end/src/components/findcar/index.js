import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";

import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import "./style.css";

// registerLicense(
//   "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXX9cc3dRR2BbWEM="
// );

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpHaV5BQmFJfFBmQGlcfVRxc0UmHVdTRHRcQl9iSH9Uc0diUXxWc3I=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmJKYVF2R2BJelR1dl9HZ0wxOX1dQl9gSXxSd0RkXH1feHBUT2E=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIfUx0RWFab1t6cVdMYVtBJAtUQF1hSn5Rd0RiXnpccXxRQ2Nd;MTExMjQwNkAzMjMwMmUzNDJlMzBsSUhGSkdUOCtvTkZQMmljb1p6dGNCbXQ1VTdHb0ZXYXpjQldkMWdPZ2Q4PQ==;MTExMjQwN0AzMjMwMmUzNDJlMzBlN1JNbXFkWHRPcTFmb0x2MitKamVhTE1Na1Q3MytVQ05CTlI3MG53R3NZPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWf1BpR2NbfE51flBEal1WVBYiSV9jS31TdERiWHhbcnVdQ2lZVw==;MTExMjQwOUAzMjMwMmUzNDJlMzBpeFYySElkdWxHa213UEUxU3Rib2VQclpwdzl1NmVKN3FHVUR5SXB2WkcwPQ==;MTExMjQxMEAzMjMwMmUzNDJlMzBtWWlyZUE5d2ZTR0NkUHJvSUdzVWVHbXdZQ0N1dVIrUllhdThMS3lST2lBPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxIfUx0RWFab1t6cVdMYVtBJAtUQF1hSn5Rd0RiXnpccXxSRWVb;MTExMjQxMkAzMjMwMmUzNDJlMzBkNld4WmFuYVRBNDRrZGtKam9rSGFVRDZaZEJ3cWEyd1RZSUxnWkhRN3o0PQ==;MTExMjQxM0AzMjMwMmUzNDJlMzBBVzdtcnpXbDVyV28xc3VldnhkR2M1dEM0Z015VHNoOTI2QW9Tdjd5cG1zPQ==;MTExMjQxNEAzMjMwMmUzNDJlMzBpeFYySElkdWxHa213UEUxU3Rib2VQclpwdzl1NmVKN3FHVUR5SXB2WkcwPQ=="
);
const FindCar = () => {
  const [key, setKey] = useState("one-way");

  const { t } = useTranslation();
  const SubmitHandler = (e) => {
    e.preventDefault();
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
                        <form onSubmit={SubmitHandler}>
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
                        <form onSubmit={SubmitHandler}>
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
