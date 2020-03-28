import React from "react";
import "./menu.scss";
import Card from "../card/card";

const Menu = props => {
  return (
    <section className="menu">
      <div className="menu__heading">
        <h2 className="heading-2">new beverages</h2>
        <p className="menu__text">three new flavours just for you</p>
      </div>
      <div className="menu__cards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Menu;
