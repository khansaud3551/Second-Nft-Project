import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="container h_main text-center pt-0 ">
      <h1>Meet The Team</h1>

      <div className="row g-3 my-5">
        <TeamCard
          name="Tyler"
          title="developer"
          img="	https://www.doodledogsnft.com/wp-content/uploads/2021/11/troops-cat-1024x1024.png"
        />
        <TeamCard
          name="Chris"
          title="Founder"
          img="https://www.doodledogsnft.com/wp-content/uploads/2021/11/snuphy.png"
        />
        <TeamCard
          name="George"
          title="developer"
          img="https://www.doodledogsnft.com/wp-content/uploads/2021/11/dog%20pfp.png"
        />
        <TeamCard
          name="Tyler"
          title="developer"
          img="	https://www.doodledogsnft.com/wp-content/uploads/2021/11/bunnys-cat-1024x1024.png"
        />
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Team;
