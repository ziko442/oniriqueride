import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SignIn = ({ previousStep, nextStep }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    // Add your sign-in logic here
  };

  return (
    <div>
      <h2>Sign in 3</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant="secondary" onClick={previousStep}>
          Previous
        </Button>{" "}
        <Button variant="primary" type="submit" onClick={nextStep}>
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
