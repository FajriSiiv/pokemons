import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getDetail() {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((datas) => setPokemon(datas));
    }

    getDetail();
    console.log(pokemon);
  }, []);

  return (
    <div className="p-3">
      <h1>Pokemon</h1>
      <div>
        <h2>{pokemon.name}</h2>
      </div>
    </div>
  );
}
