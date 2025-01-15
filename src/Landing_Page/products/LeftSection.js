import React from "react";


export default function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <div className="container p-5  ">
      <div className="row  mt-5 mb-5">
        <div className="col-5">
          <img src={imageURL} />
        </div>

        <div className="col-2"></div>

        <div className="col-5">
          <h1>{productName}</h1>
          <p>
           {productDescription}
          </p>

          <div className="row">
            <div className="col-6">
              <p>
                <a href={tryDemo} style={{ textDecoration: "none" }}>
                  Try demo
                </a>
              </p>
            </div>
            <div className="col-6">
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn more
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img src={googlePlay} alt="Play Store" style={{ width:"150px" }}/>
            </div>
            <div className="col-6">
            <img src={appStore} alt="App Store" style={{ width:"150px" }}/>

            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
