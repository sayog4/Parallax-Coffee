import React from "react";
import "./card.scss";
import Button from "../button/button";

const Card = props => {
  return (
    <div className="card">
      <h4 className="heading-4">luwak coffee</h4>
      <figure className="card__fig">
        <img src="./img/c1.png" alt="coffee" className="card__img" />
        <figcaption className="card__price">$ 100</figcaption>
      </figure>
      <p className="card__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
        facere consequatur ipsum aperiam, quae dolor impedit? Excepturi,
        voluptate quidem.
      </p>
      <Button>Learn more</Button>
    </div>
  );
};

export default Card;
