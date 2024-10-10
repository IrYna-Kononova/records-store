import React, { useState } from "react";
import "../styles/Form.scss";

const Form = ({ inputs, buttonText, heading, onFormSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>{heading}</h1>
      {inputs.map((input) => (
        <div key={input.name} className="info">
          <input
            name={input.name}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className="submit">
        <input className="button-bg" type="submit" value={buttonText} />
      </div>
    </form>
  );
};

export default Form;
