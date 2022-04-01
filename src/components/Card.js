import React from "react";

function Card() {
  return (
    <div className="container-fluid p-0 banner__image2">
      <img className="w-100 card__img " src="assets/banner.png" alt="" />
      <div className="banner__layer px-md-4 col-10 col-sm-8 col-md-7 col-lg-6 row text-white">
        <h1 className="w-100 text-center col-12 text-white text670">
          Roadmap v1
        </h1>
        <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">25%</h2>
          <p className="px-4 m-0 text676">
            Host our first of many giveaways to holders as a reward (100 FREE
            Big Bros)
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">50%</h2>
          <p className="px-4 m-0 text676">
            Open up Merch Store to show off your Bro
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">75%</h2>
          <p className="px-4 m-0 text676">
            Big Bros drawing competition. Winners will receive ETH, NFTs, and
            more
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">100%</h2>
          <p className="px-4 m-0 text676">
            One lucky Big Bro holder will receive an airdropped popular blue
            chip NFT
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
