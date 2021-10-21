import React, { useState } from "react";
import mockData from "./mockData";
import { Typography } from "@material-ui/core";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    rturn(
      <Typography variant="h1">
        {`${id}.`} {toFirstCharUppercase(name)}
        <img src={front_default} />
      </Typography>
    );
  };

  return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
