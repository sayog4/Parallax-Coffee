import React from "react";
import "./input.scss";

const Input = ({ label, type }) => {
  return (
    <div className="form-group">
      <input type={type} required className="input" />
      <label className="label">{label}</label>
    </div>
  );
};

export default Input;
