import React, { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from "axios";

const Payment = ({ previousStep, nextStep, price }) => {
  // const [price, setPrice] = useState(""); // State to hold the price value
  const [billingContact, setBillingContact] = useState({}); // State to hold the billing contact details

  // Function to handle card tokenize response
  const handleCardTokenizeResponse = async (token, buyer) => {
    // Create an order object with the dynamically inputted values
    const order = {
      amount: price,
      billingContact: billingContact,
      currencyCode: "USD",
      intent: "CHARGE",
      token: token,
    };

    try {
      const response = await axios.post("/api/payments", order);
      console.log("Payment successful", response.data);
      // Update the UI or take any other necessary action based on the response
      // E.g., show a success message, navigate to the next step, etc.
    } catch (error) {
      console.log(order);
      console.error("Payment failed", error);
      // Update the UI or take any other necessary action based on the error
      // E.g., show an error message, retry payment, etc.
    }
  };

  // Function to handle input change for price field


  // Function to handle input change for billing contact fields
  const handleBillingContactChange = (e) => {
    const { name, value } = e.target;
    setBillingContact((prevBillingContact) => ({
      ...prevBillingContact,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={handlePriceChange}
      /> */}
      <input
        type="text"
        name="addressLines"
        placeholder="Enter Address"
        value={billingContact.addressLines || ""}
        onChange={handleBillingContactChange}
      />
      <input
        type="text"
        name="familyName"
        placeholder="Enter Family Name"
        value={billingContact.familyName || ""}
        onChange={handleBillingContactChange}
      />
      <input
        type="text"
        name="givenName"
        placeholder="Enter Given Name"
        value={billingContact.givenName || ""}
        onChange={handleBillingContactChange}
      />
      <input
        type="text"
        name="countryCode"
        placeholder="Enter Country Code"
        value={billingContact.countryCode || ""}
        onChange={handleBillingContactChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={billingContact.city || ""}
        onChange={handleBillingContactChange}
      />
      <PaymentForm
        applicationId="sandbox-sq0idb-dR9X9p5XPSarc6SaSOvHGg"
        cardTokenizeResponseReceived={handleCardTokenizeResponse}
        createVerificationDetails={() => ({
          amount: price,
          billingContact: billingContact,
          currencyCode: "USD",
          intent: "CHARGE",
        })}
        locationId="LTW11K871DYQA"
      >
        <CreditCard>
          <>Pay ${price}</>
        </CreditCard>
      </PaymentForm>
      </div>
  );
      };

export default Payment;
