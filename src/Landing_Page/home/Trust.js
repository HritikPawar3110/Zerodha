import React from "react";
import ecosystem from "../images/ecosystem.png";
import pressLogo  from '../images/pressLogos.png'

export default function Trust() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-6 mt-5     ">
          <h1 className="">Trust with confidence</h1>
          <h3 className="mt-5">Customer-first always</h3>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="mt-5">The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-5">No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="mt-5">Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 text-center">
          <img src={ecosystem} style={{ width: "95%" }} />
          <a href="" className="mx-5  " style={{ textDecoration: "none" }}>
            Explore our products
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            Try Kite demo
          </a>
        </div>
      </div>
      <div className="container text-center">
      <img className="mb-5 " src={pressLogo}/>

      </div>
      
    </div>
  );
}
