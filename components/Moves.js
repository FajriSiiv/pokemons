import React from "react";

const Moves = ({ move }) => {
  const maxData = move.slice(0, 10);
  return (
    <div className="grid grid-cols-2 gap-y-2 text-sm sm:text-base md:text-lg md:gap-y-4">
      {maxData.map((e) => (
        <p className="capitalize " key={e.move.name}>
          {e.move.name}
        </p>
      ))}
    </div>
  );
};

export default Moves;
