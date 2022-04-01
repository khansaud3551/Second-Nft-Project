import React from "react";

function Content3() {
  return (
    <div className="container-fluid px-0 bg__blue">
      <div className="container h_main d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <img
              className="w-100 anim_check"
              data-aos="zoom-out-right"
              src="assets/head4.png"
              alt=""
            />
          </div>
          <div className="col-md-7 text-right">
            <h2 className="text-right" data-aos="zoom-in-up">
              We are giving away to our Bros!
            </h2>
            <p className="line" data-aos="fade-right">
              There are many problems in the world. Whether it’s world hunger,
              war, abuse, or hate towards others. A very important goal for us
              is to donate some of our proceeds to an unfortunate cause. This
              shall be decided through the Bro community and what is the best
              way to contribute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content3;
