import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid px-0 bg__blue">
        <div className="container">
          <img className=" img__footer" src="assets/head3.png" alt="" />
        </div>
      </div>
      <div className=" d-flex py-2 flex-column justify-content-center align-items-center bg__footer py-0">
        <p className="m-0 ">2022 © All Rights Reserved</p>
        {/* <div className="mt-2 d-flex footer__bottom pb-2">
          <a className="m-0" style={{ fontSize: "15px" }} href="">
            Terms & Conditions
          </a>
          <a className="m-0" style={{ fontSize: "15px" }} href="">
            Privacy Policy
          </a>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
