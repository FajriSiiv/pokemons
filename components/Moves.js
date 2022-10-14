import React from "react";

const Moves = ({ move }) => {
  const maxData = move.slice(0, 10);
  return (
    <div className="grid grid-cols-2 gap-y-2">
      {maxData.map((e) => (
        <p className="capitalize text-sm" key={e.move.name}>
          {e.move.name}
        </p>
      ))}
    </div>
  );
};

export default Moves;
