import React, { useState } from "react";
import mockData from "./mockData";
import { toFirstCharUppercase } from "./constants";
import { Typography } from "@material-ui/core";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} />
        </Typography>
        <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
        <Typography variant="h3">Pokemon Info</Typography>
      </>
    );
  };

  return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
