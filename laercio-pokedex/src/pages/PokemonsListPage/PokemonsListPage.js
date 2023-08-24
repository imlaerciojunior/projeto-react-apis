import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { ApiContext } from "../../context/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";
import { Card, Title } from "../../pages/PokemonsListPage/PokemonsListPageStyled";
import { ModalPokemon } from "../../modal/ModalPokemon";

const PokemonsListPage = () => {
  const { pokemons } = useContext(ApiContext);

  return (
    <>
      <div>
        <Header/>
      </div>
    <div>
      <Title>Todos Pokémons</Title>

      <Card>
        
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            cardColor={getColors(pokemon.types[0])}
            pokemon={pokemon}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            types={pokemon.types}
          />
        ))}
      </Card>
    </div>
    <ModalPokemon/>
    </>
  );
};

export default PokemonsListPage;
