import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.username.toString() === "user@gmail.com" && values.password.toString() === "123456"){
        alert("Hi User");
        navigate("/result");
    }
    else{
        alert("Fuck off dummy user");
        window.location.reload(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <Form className="LoginLightMode" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">User Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="username"
            id="username"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
            onChange={handleInput}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-warning">
          LOG IN
        </Button>
      </Form>
      <div className="bg-warning">
        <img src="https://tinyurl.com/loginlight" alt="Login-banner" width="300px"/>
      </div>
    </div>
  );
}
