import React from "react";
import { Button, Form } from "react-bootstrap";

const Options = ({ nextStep, previousStep }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Options 2</Form.Label>
        <Form.Control type="text" placeholder="Enter text" />
      </Form.Group>
      <Button variant="secondary" onClick={previousStep}>
        Previous
      </Button>{" "}
      <Button variant="primary" onClick={nextStep}>
        Next
      </Button>
    </Form>
  );
};

export default Options;
