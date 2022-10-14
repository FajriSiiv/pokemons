import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };
    getData();
  }, []);

  return (
    <div className="p-3">
      <button>
        <Link href={"/"}>Back</Link>
      </button>
      <h1>Pokemon</h1>
      <div>
        <h2>{pokemon.name}</h2>
      </div>
    </div>
  );
}
