import React from "react";

function Banner() {
  return (
    <div className="banner px-0 container-fluid banner__overlay">
      <img className="banner_img" src="assets/banner.png" alt="" />
      <div className="container banner_cont">
        <button className="banner_btn">BUY ON OPENSEA</button>
      </div>
      <div className="overlay_item"></div>
    </div>
  );
}

export default Banner;
