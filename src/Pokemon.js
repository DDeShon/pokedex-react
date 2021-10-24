import React, { useState, useEffect } from "react";
import { toFirstCharUppercase } from "./constants";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  pokemonContainer: {
    display: "grid",
    textAlign: "center",
    justifyItems: "center",
  },
}));

const Pokemon = (props) => {
  const { history, match } = props;
  const classes = useStyles();
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <div className={classes.pokemonContainer}>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} />
        </Typography>
        <img style={{ width: "400px", height: "400px" }} src={fullImageUrl} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography variant="h5">
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <br />
        <Typography variant="h5">Height: {height} </Typography>
        <Typography variant="h5">Weight: {weight} </Typography>
        <br />
        <Typography variant="h5"> Types: </Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
      </div>
    );
  };

  return (
    <div className={classes.pokemonContainer}>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      <br />
      <br />
      <br />
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </div>
  );
};

export default Pokemon;
