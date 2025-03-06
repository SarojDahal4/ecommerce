import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./pages.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");

  const nameHandleChange = (event) => {
    setName(event.target.value);
  };
  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandleChange = (event) => {
    setpassword(event.target.value);
  };

  const handleSummit = () => {
    axios
      .post("http://localhost:4040/api/login/register", {
        NAME: name,
        EMAIL: email,
        PASSWORD: password,
      })
      .then(() => {
        console.log("user created");
      });
  };
  return (
    <>
      <div className="registerForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full Name"
              onChange={nameHandleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={emailHandleChange}
            />
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={passwordHandleChange}
            />
          </Form.Group>

          <Button
            className="mb-3"
            variant="primary"
            type="submit"
            onClick={handleSummit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
