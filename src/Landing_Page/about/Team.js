import React from "react";
import Nitin from "../images/nithinKamath.jpg";

export default function Team() {
  return (
    <div className="container p-5">
      <div className="row mb-5">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row ">
        <div className="col-6 text-center">
          <img
            src={Nitin}
            alt="Nitin Kamath"
            style={{ borderRadius: "100%",width:"300px" }}
          />
          <h3 className="text-muted text-center">Nitin Kamath</h3>
          <p className="text-muted text-center">Founder, CEO</p>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <span>
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>
            </span>{" "}
            /{" "}
            <span>
              <a href="" style={{ textDecoration: "none" }}>
                TrendinQnA
              </a>
            </span>{" "}
            /{" "}
            <span>
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
