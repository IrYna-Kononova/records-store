import React, { useContext } from "react";
import { motion } from "framer-motion";
import gif02 from "../assets/02.gif";
import Form from "../components/Form";
import { login } from "../api/usersApi.js";
import { DataContext } from "../contexts/Context.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { usersDispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    await login(usersDispatch, formData);
    navigate("/records");
  };
  
  const inputs = [
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
        buttonText="Log In"
        heading="Welcome back!"
        onFormSubmit={handleLogin}
      />
      <div className="right">
        <img src={gif02} alt="gif02" />
      </div>
    </motion.div>
  );
};

export default Login;
