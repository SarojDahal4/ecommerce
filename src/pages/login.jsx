import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./pages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSummit = (event) => {
    axios.defaults.withCredentials = true;

    event.preventDefault();

    axios
      .post("http://localhost:4040/api/login/login", {
        EMAIL: email,
        PASSWORD: password,
      })
      .then((res) => {
        if (res.data.err) {
          console.log("error");
        } else if (res.data.Login) {
          localStorage.setItem("token", res.data.token);
          console.log("success");
          Navigate("/");
        } else {
          alert("no data");
        }
      });
  };
  return (
    <>
      <div className="mainLogin">
        <div className="loginForm">
          <Form>
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

            <Form.Group className="mb-3">
              If you dont have an account Register Here!!
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
