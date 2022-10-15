import React from "react";

const About = ({ data }) => {
  return (
    <div className="grid grid-cols-5 capitalize gap-y-2 font-medium text-sm sm:text-base md:text-lg md:gap-y-4">
      <p className="col-span-2">Species</p>
      <p className="col-span-3">{data.species.name}</p>
      <p className="col-span-2">Height</p>
      <p className="col-span-3">{data.height} cm</p>
      <p className="col-span-2">Weight</p>
      <p className="col-span-3">{data.weight} lbs</p>
      <p className="col-span-2">Abilities</p>
      <p className="col-span-3 ">
        {data.abilities.map((e, i) => (
          <span key={i} className="mr-1 capitalize">
            {e.ability.name},
          </span>
        ))}
      </p>
    </div>
  );
};

export default About;
