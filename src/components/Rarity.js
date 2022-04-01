import React from "react";

function Rarity() {
  return (
    <div className="container-fluid bg__yellow px-0">
      <div className="rarity container h_main d-flex flex-column  align-items-center">
        <h1 className="mb-4">Rarity</h1>
        <div
          className="col-md-10 px-md-4 py-md-0"
          data-aos="slide-right"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <img className="w-100" src="assets/rarity.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rarity;
