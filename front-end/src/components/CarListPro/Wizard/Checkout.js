import React from "react";
import { Button } from "react-bootstrap";

const Checkout = ({ previousStep }) => {
  return (
    <div>
      <p>Checkout 3</p>
      <Button variant="secondary" onClick={previousStep}>
        Previous
      </Button>
    </div>
  );
};

export default Checkout;
