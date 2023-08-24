import React, { createContext, useEffect, useState } from "react";

export const PokemonCardContext = createContext();

const PokemonCardProvider = ({ children }) => {
  const [pokemonCart, setPokemonCart] = useState([]);
  const [pokemonAmount, setPokemonAmount] = useState(0);

  const [modalPokemon, setModalPokemon] = useState(false);
  const [modalStatus, setModalStatus] = useState();

  useEffect(() => {
    if (pokemonCart) {
      const amount = pokemonCart.reduce(
        (accmulator, currentItem) => accmulator + 1,
        0
      );
      setPokemonAmount(amount);
    }
  }, [pokemonCart]);

  const addToPokedex = (pokemon, name) => {
    const checkPokemon = pokemonCart.find((pokemon) => pokemon.name === name);
    if (checkPokemon) {
      console.log("pokemon capturado");
      return;
    }
    setPokemonCart([...pokemonCart, { pokemon, name, amount: 1 }]);

    setModalPokemon(true);
    setModalStatus(0);
  };

  const removePokemon = (name) => {
    const pokemonRemove = pokemonCart.filter((pokemon) => pokemon.name !== name);
    setPokemonCart(pokemonRemove);
    // console.log("AQUIII", removePokemon);

    setModalPokemon(true)
    setModalStatus(1)
  };

  return (
    <PokemonCardContext.Provider
      value={{ pokemonCart,
        pokemonAmount,
        addToPokedex,
        removePokemon,
        modalPokemon,
        setModalPokemon,
        modalStatus,
        setModalStatus,
     }}
    >
      {children}
    </PokemonCardContext.Provider>
  );
};

export default PokemonCardProvider;
