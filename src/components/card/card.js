import React from "react";
import "./card.scss";
import Button from "../button/button";

const Card = ({ heading, imgSrc, price, desc }) => {
  return (
    <div className="card">
      <h4 className="heading-4">{heading}</h4>
      <figure className="card__fig">
        <img src={imgSrc} alt="coffee" className="card__img" />
        <figcaption className="card__price">
          $ {parseFloat(price).toFixed(2)}
        </figcaption>
      </figure>
      <p className="card__text">{desc}</p>
      <Button>Learn more</Button>
    </div>
  );
};

export default Card;
