import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5">
      <div className="row  ">
        <div className="col-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
