import React from "react";

import "./main.scss";

import Button from "../button/button";

const Main = props => {
  return (
    <header className="main" id="home">
      <div className="main__logo">
        <img src="./img/logo.png" alt="logo" className="main__logo-img" />
      </div>
      <div className="main__content">
        <h1 className="heading-1">it's coffee o'clock</h1>
        <p className="main__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          nostrum quidem maxime sapiente voluptatem deserunt itaque odio, sed ea
          adipisci.
        </p>
        <Button>Learn more</Button>
      </div>
    </header>
  );
};

export default Main;
