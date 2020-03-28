import React, { useState, useCallback } from "react";
import "./navigation.scss";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggle = useCallback(() => {
    setToggleNav(prevState => !prevState);
  }, []);

  return (
    <div className="navigation">
      <div
        onClick={toggle}
        className={["navigation__button", toggleNav ? "rotate" : null].join(
          " "
        )}
      >
        <span className="navigation__icon"></span>
      </div>
      <div
        className={[
          "navigation__background",
          toggleNav ? "navigation__background--open" : null
        ].join(" ")}
      ></div>
      <nav
        className={[
          "navigation__nav",
          toggleNav ? "navigation__nav--open" : null
        ].join(" ")}
      >
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#order" className="navigation__link">
              Order
            </a>
          </li>
          <li className="navigation__item">
            <a href="#menu" className="navigation__link">
              Menu
            </a>
          </li>
          <li className="navigation__item">
            <a href="#register" className="navigation__link">
              Register
            </a>
          </li>
          <li className="navigation__item">
            <a href="#discount" className="navigation__link">
              Discount
            </a>
          </li>
          <li className="navigation__item">
            <a href="#store" className="navigation__link">
              Store
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
