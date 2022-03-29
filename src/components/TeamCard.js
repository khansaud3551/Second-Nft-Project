import React from "react";

function TeamCard({ name, title, img }) {
  return (
    <div className="col-md-3  pb-1 px-4  text-center">
      <div className="px-3 py-3 pb-1 border_team">
        <img className="w-100 border__img" src={img} alt="" />
        <h3 className="my-0 text-black mt-4 text-capitalize ">{name}</h3>
        <p className="m-0 font_2g text-center text-capitalize">{title}</p>
      </div>
    </div>
  );
}

export default TeamCard;
