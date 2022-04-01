import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="container-fluid bg__blue px-0">
      <div className="container h_main text-center mt-0 my-md-0 mb-md-0 pt-0 py-md-4">
        <h1>Meet The Team</h1>

        <div className="row g-3 my-5 justify-content-center">
          <TeamCard name="Tyler" title="developer" img="assets/CoolBros.png" />
          <TeamCard name="Chris" title="Founder" img="assets/CoolBros2.png" />
          <TeamCard
            name="George"
            title="developer"
            img="assets/CoolBros3.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
