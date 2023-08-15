import { Link, useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import Form from "./Form";
import Button from "../Button";
import { useState } from "react";

import useAuth from "../../hook/useAuth";

const SingUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // do validation

    if (password !== confirmPassword) {
      return setError("password don't match !!");
    }

    try {
      setError("");
      setLoading(true);
      await createUser(email, password, username);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError("Failed to create an account!");
    }
  };
  return (
    <>
      <Form style={{ height: "550px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextInput>
        <TextInput
          type="email"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextInput>
        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextInput>
        <TextInput
          type="password"
          placeholder="confirm password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></TextInput>
        <Checkbox 
        text="I agree to the Terms &amp; Conditions" 
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          <span> Submit now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </>
  );
};

export default SingUpForm;
