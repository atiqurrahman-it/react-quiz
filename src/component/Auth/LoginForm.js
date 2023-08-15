import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "../Button";
import useAuth from "../../hook/useAuth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { logInUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logInUser(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  };

  return (
    <>
      <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
        <TextInput
          type="email"
          placeholder="Enter Email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>
          <span> Submit now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div class="info">
          Don't have an account? <Link to="/singUp">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
