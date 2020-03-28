import React from "react";
import "./discount.scss";
import Button from "../button/button";

const Discount = props => {
  return (
    <section className="discount" id="discount">
      <div className="discount__content">
        <h2 className="heading-2">bring your own tumbler discount 20% off</h2>
        <Button>Learn how </Button>
      </div>
    </section>
  );
};

export default Discount;
