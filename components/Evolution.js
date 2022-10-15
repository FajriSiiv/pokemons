import React, { useEffect, useState } from "react";

const Evolution = ({ evolution, loading }) => {
  const [evo, setEvo] = useState(evolution);

  return (
    <div className="grid grid-cols-2 justify-items-center">
      {loading && <p>Loading..</p>}
      {evo && (
        <>
          <img
            className="w-[96px] h-[96px] scale-150"
            src={evo.sprites.front_default}
            alt={evo.name}
          />
          <img
            className="w-[96px] h-[96px] scale-150"
            src={evo.sprites.front_shiny}
            alt={evo.name}
          />
          <img
            className="w-[96px] h-[96px] scale-150"
            src={evo.sprites.back_default}
            alt={evo.name}
          />
          <img
            className="w-[96px] h-[96px] scale-150"
            src={evo.sprites.back_shiny}
            alt={evo.name}
          />
        </>
      )}
    </div>
  );
};

export default Evolution;
