import React from "react";
import "./join.scss";
import Input from "../input/input";
import Button from "../button/button";
const Join = props => {
  return (
    <section className="join" id="register">
      <h2 className="heading-2">join members form</h2>
      <form className="join__form">
        <Input label="first name" type="text" />
        <Input label="last name" type="text" />
        <Input label="user name" type="text" />
        <Input label="email" type="email" />
        <Input label="password" type="password" />
        <Button>Register</Button>
      </form>
    </section>
  );
};

export default Join;
