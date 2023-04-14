import * as React from "react";
import { Button } from "react-bootstrap";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from "axios"; // Import axios library for making API requests

const Payment = ({ previousStep, nextStep, price }) => {
  // Function to handle card tokenize response
  const handleCardTokenizeResponse = async (token, buyer) => {
    // Create an order object with the order details
    const order = {
      amount: "1.00", // Update with your desired amount
      billingContact: {
        addressLines: ["123 Main Street", "Apartment 1"],
        familyName: "Doe",
        givenName: "John",
        countryCode: "GB",
        city: "London",
      },
      currencyCode: "GBP",
      intent: "CHARGE",
      token: token, // Pass the token received from cardTokenizeResponseReceived
    };

    try {
      // Send a POST request to the backend with the order details
      const response = await axios.post("/api/payments", order); // Update with your backend API endpoint
      // Handle the response from the backend
      console.log("Payment successful", response.data);
      // Update the UI or take any other necessary action based on the response
      // E.g., show a success message, navigate to the next step, etc.
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log(order);
      console.error("Payment failed", error);
      // Update the UI or take any other necessary action based on the error
      // E.g., show an error message, retry payment, etc.
    }
  };

  return (
    <div>
      <PaymentForm
        applicationId="sandbox-sq0idb-dR9X9p5XPSarc6SaSOvHGg"
        cardTokenizeResponseReceived={handleCardTokenizeResponse} // Pass the function to handle card tokenize response
        createVerificationDetails={() => ({
          amount: "1.00",
          billingContact: {
            addressLines: ["123 Main Street", "Apartment 1"],
            familyName: "Doe",
            givenName: "John",
            countryCode: "GB",
            city: "London",
          },
          currencyCode: "GBP",
          intent: "CHARGE",
        })}
        locationId="LTW11K871DYQA"
      >
        <CreditCard>
          <>Pay {price} USD</>
        </CreditCard>
      </PaymentForm>
    </div>
  );
};

export default Payment;
