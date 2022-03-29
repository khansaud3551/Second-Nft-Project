import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <img className=" img__footer" src="assets/head3.png" alt="" />
      </div>
      <div className=" d-flex flex-column justify-content-center align-items-center bg-warning py-0">
        <p className="m-0 ">2021 © All Rights Reserved</p>
        <div className="mt-2 d-flex footer__bottom pb-2">
          <a className="m-0" style={{ fontSize: "15px" }} href="">
            Terms & Conditions
          </a>
          <a className="m-0" style={{ fontSize: "15px" }} href="">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
