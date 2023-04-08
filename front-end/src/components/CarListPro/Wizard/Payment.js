import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Payment({ nextStep, previousStep }) {
  const [paymentData, setPaymentData] = useState('');
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handlePaymentChange = (e) => {
    setPaymentData(e.target.value);
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can access paymentData and registrationData to get the form values
    // For example, you can send them to a backend server for processing
    console.log('Payment Data:', paymentData);
    console.log('Registration Data:', registrationData);

    // Move to the next step
    nextStep();
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Payment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter payment details (e.g. Square payment info)"
          value={paymentData}
          onChange={handlePaymentChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Registration</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstName"
          value={registrationData.firstName}
          onChange={handleRegistrationChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={registrationData.lastName}
          onChange={handleRegistrationChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
          value={registrationData.phoneNumber}
          onChange={handleRegistrationChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={registrationData.email}
          onChange={handleRegistrationChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={registrationData.password}
          onChange={handleRegistrationChange}
        />
      </Form.Group>
      <Button variant="secondary" onClick={previousStep}>
        Previous
      </Button>{' '}
      <Button variant="primary" onClick={handleSubmit}>
        Next
      </Button>
    </Form>
  );
}
