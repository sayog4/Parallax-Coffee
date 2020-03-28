import React from "react";
import "./about.scss";
import Button from "../button/button";

const About = props => {
  return (
    <section className="about">
      <div className="about__content">
        <h3 className="heading-3">make your own</h3>
        <h2 className="heading-2">coffee recipe</h2>
        <p className="about__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quo
          et iste sed! Odit, velit. Alias recusandae veritatis ea consequatur,
          quasi omnis assumenda nam aut voluptas cupiditate deserunt iste, fuga
          qui mollitia similique! Maxime, possimus architecto aliquam natus
          animi tempore!
        </p>
        <Button>book now</Button>
      </div>
    </section>
  );
};

export default About;
