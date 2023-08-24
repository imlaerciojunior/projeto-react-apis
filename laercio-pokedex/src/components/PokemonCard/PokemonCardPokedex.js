import React, { useContext } from "react";
import pokeball from "../../utils/pokebola.png";
import { goToDetails } from "../../routes/coordenator";
import {
  ContainerPokedex,
  DetailsButtonPokedex,
  ExcluirButton,
  PokeballPokedex,
  PokemonNamePokedex,
  PokemonNumberPokedex,
  PokemonPokedex,
  PokemonTypePokedex,
  TypesContainerPokedex,
  TypesPokedex,
} from "./PokemonCardPokedexStyled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";
import { PokemonCardContext } from "../../context/PokemonCardContext";
import { useNavigate } from "react-router-dom";

const PokemonCardPokedex = ({ pokemon, name, image, id, types, cardColor }) => {
  
  const navigate = useNavigate();

  const { removePokemon } = useContext(PokemonCardContext);

  return (
    <ContainerPokedex color={cardColor}>
      <div>
        <PokemonNumberPokedex>{`# ${id}`}</PokemonNumberPokedex>
        <PokemonNamePokedex>{name}</PokemonNamePokedex>
        <TypesContainerPokedex>
          <TypesPokedex>
            {types.map((type) => {
              return (
                <PokemonTypePokedex key={type} src={getTypes(type)} alt="" />
              );
            })}
          </TypesPokedex>
        </TypesContainerPokedex>
        <DetailsButtonPokedex onClick={() => goToDetails(navigate, id)}>
          Detalhes
        </DetailsButtonPokedex>
      </div>
      <div>
        <PokemonPokedex src={image} alt="" />
        <ExcluirButton onClick={() => removePokemon(name)}>
          Excluir
        </ExcluirButton>
      </div>
      <PokeballPokedex src={pokeball} alt="" />
    </ContainerPokedex>
  );
};

export default PokemonCardPokedex;
