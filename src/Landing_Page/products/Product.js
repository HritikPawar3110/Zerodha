import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import signup from "../images/signup.png";
import playstore from "../images/Google Play.PNG";
import appstore from "../images/App store.PNG";
import RightSection from "./RightSection";
import Console from "../images/console.png";
import Coin from '../images/coin.png'
import KiteConnect from '../images/kiteconnect.png'
import Versity from '../images/varsity.png'

export default function Product() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={signup}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay={playstore}
        appStore={appstore}
      />
      <RightSection
        imageURL={Console}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
      />
       <LeftSection
        imageURL={Coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay={playstore}
        appStore={appstore}
      />
      <RightSection
        imageURL={KiteConnect}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        learnMore=""
      />
       <LeftSection
        imageURL={Versity}
        productName="Versity"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay={playstore}
        appStore={appstore}
      />
    </>
  );
}
