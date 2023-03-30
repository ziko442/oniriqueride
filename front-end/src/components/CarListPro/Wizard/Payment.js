import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Payment({ nextStep, previousStep }) {
  return (
    <Form>
    <Form.Group>
      <Form.Label>Payment 4</Form.Label>
      <Form.Control type="text" placeholder="Enter text" />
    </Form.Group>
    <Button variant="secondary" onClick={previousStep}>
      Previous
    </Button>{" "}
    <Button variant="primary" onClick={nextStep}>
      Next
    </Button>
  </Form>
  )
}
