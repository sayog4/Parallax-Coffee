import React from "react";
import "./opening.scss";
import Button from "../button/button";

const Opening = props => {
  return (
    <section className="opening" id="store">
      <div className="opening__content">
        <h3 className="heading-3">opening</h3>
        <h2 className="heading-2">new store</h2>
        <p className="opening__text">123 street xyz 000-000-000</p>
        <Button>Go to map</Button>
      </div>
    </section>
  );
};

export default Opening;
