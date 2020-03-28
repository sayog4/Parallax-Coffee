import React from "react";
import Main from "../components/main/main";
import About from "../components/about/about";
import Menu from "../components/menu/menu";
import Join from "../components/join/join";
import Discount from "../components/discount/discount";
import Opening from "../components/opening/opening";
import Espresso from "../components/espresso/espresso";
import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";

const Homepage = props => {
  return (
    <>
      <Navigation />
      <Main />
      <About />
      <Menu />
      <Join />
      <Discount />
      <Opening />
      <Espresso />
      <Footer />
    </>
  );
};

export default Homepage;
