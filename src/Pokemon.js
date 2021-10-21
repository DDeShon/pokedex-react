import React from "react";
import mockData from "./mockData";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

  return (

  );
};

export default Pokemon;
