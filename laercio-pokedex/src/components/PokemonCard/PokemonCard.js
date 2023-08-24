import React, { useContext } from "react";
import pokeball from "../../utils/pokebola.png";
import { goToDetails } from "../../routes/coordenator";
import {
  CatchButton,
  Container,
  DetailsButton,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  Types,
  TypesContainer,
} from "./PokemonCardStyled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";
import { PokemonCardContext } from "../../context/PokemonCardContext";
import { useNavigate } from "react-router-dom";


const PokemonCard = ({ pokemon ,name ,image, id, types, cardColor }) => {
  const navigate = useNavigate();
  
  const {addToPokedex} = useContext(PokemonCardContext)

  return (
    <Container color={cardColor}>
      <div>
        <PokemonNumber>{`# ${id}`}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          <Types>
            {types.map((type)=>{ 
              return <PokemonType key={type} src={getTypes(type)} alt="" />
            })}
          </Types>
        </TypesContainer>
        <DetailsButton onClick={() => goToDetails(navigate,id)}>
          Detalhes
        </DetailsButton>
      </div>
      <div>
        <Pokemon src={image} alt="" />
        <CatchButton onClick={()=>addToPokedex(pokemon,name)}>CAPTURAR!</CatchButton>
      </div>
      <Pokeball src={pokeball} alt="" />
    </Container>
  );
};

export default PokemonCard;