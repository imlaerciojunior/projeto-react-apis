import React, { useContext } from "react";
import "../../pages/PokedexPage/PokedexStyled.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { getColors } from "../../functions/ReturnCardColors";
import { PokemonCardContext } from "../../context/PokemonCardContext";
import { ApiContext } from "../../context/useApiContext";
import HeaderPokedex from "../../components/Header/HeaderPokedex";
import { Card, Title } from "../PokemonsListPage/PokemonsListPageStyled";

const PokedexPage = () => {
  const { pokemons } = useContext(ApiContext);
  console.log(pokemons);
  const { pokemonCart } = useContext(PokemonCardContext);

  return (
    <>
      <div>
        <HeaderPokedex />
      </div>
      <Title>
        Meus Pokémons
      </Title>
      <Card>
        {pokemonCart.map((capturedPokemon) => (
          <PokemonCard
            cardColor={getColors(capturedPokemon.pokemon.types[0])}
            pokemon={capturedPokemon.pokemon}
            id={capturedPokemon.pokemon.id}
            name={capturedPokemon.pokemon.name}
            image={
              capturedPokemon.pokemon.sprites.other["official-artwork"]
                .front_default
            }
            types={capturedPokemon.pokemon.types}
          />
        ))}
      </Card>
    </>
  );
};

export default PokedexPage;
