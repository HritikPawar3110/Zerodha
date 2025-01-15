import React from "react";
import homeHero from "../images/homeHero.png";

export default function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img className="mb-5" src={homeHero} width={"auto"} alt="Hero Image" />
        <h1>Invest in everything</h1>
        <p className="text-muted fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
