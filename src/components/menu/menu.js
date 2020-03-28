import React from "react";
import "./menu.scss";
import Card from "../card/card";

const Menu = props => {
  return (
    <section className="menu" id="menu">
      <div className="menu__heading">
        <h2 className="heading-2">new beverages</h2>
        <p className="menu__text">three new flavours just for you</p>
      </div>
      <div className="menu__cards">
        <Card
          heading="luwak coffee"
          imgSrc="./img/c1.png"
          price="7"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
        facere consequatur ipsum aperiam, quae dolor impedit? Excepturi,
        voluptate quidem."
        />
        <Card
          heading="arabica coffee"
          imgSrc="./img/c2.png"
          price="4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
        facere consequatur ipsum aperiam, quae dolor impedit? Excepturi,
        voluptate quidem."
        />
        <Card
          heading="colombian coffee"
          imgSrc="./img/c3.png"
          price="5"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
        facere consequatur ipsum aperiam, quae dolor impedit? Excepturi,
        voluptate quidem."
        />
      </div>
    </section>
  );
};

export default Menu;
