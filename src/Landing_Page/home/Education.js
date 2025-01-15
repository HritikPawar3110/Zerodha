import React from "react";
import versity from "../images/Versity1.PNG";

export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src={versity} style={{width:"400px"}} />
        </div>
        <div className="col">
          <div className=" ">
            <h1>Free and open market education</h1>
          </div>
          <div className="mt-3 ">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
          </div>
          <div className=" mt-3 ">
            <a href=" ">Varsity</a>
          </div>
          <div className="mt-3 ">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries
            </p>
          </div>
          <div className="mt-3 ">
          <a href="">TradingQ&A</a>
        </div>
        </div>
        
      </div>
    </div>
  );
}
