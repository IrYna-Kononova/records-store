import React, { useContext } from "react";
import { motion } from "framer-motion";
import gif01 from "../assets/01.gif";
import Form from "../components/Form";
import { signup } from "../api/usersApi.js";
import { DataContext } from "../contexts/Context.jsx";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { usersDispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    await signup(usersDispatch, formData);
    navigate("/records");
  };

  const inputs = [
    {
      name: "firstName",
      placeholder: "First name",
      defaultValue: "",
    },
    {
      name: "lastName",
      placeholder: "Last name",
      defaultValue: "",
    },
    {
      name: "email",
      placeholder: "Email",
      defaultValue: "",
    },
    {
      name: "password",
      placeholder: "Password",
      defaultValue: "",
    },
  ];

  return (
    <motion.div
      className="layout"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Form
        inputs={inputs}
        buttonText="Sign Up"
        heading="Hello there"
        onFormSubmit={handleRegister}
      />

      <div className="right">
        <img src={gif01} alt="gif01" />
      </div>
    </motion.div>
  );
};

export default Signup;
