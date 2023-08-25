import React, { useContext } from "react";
import pokeball from "../../utils/pokebola.png"
import "../../pages/PokemonDetailPage/PokemonDetailPageStyled";
import { useParams } from "react-router-dom";
import {
  Container,
  Title,
  MovesContainer,
  TypeContainer,
  DetailsContainer,
  FrontBackImageContainer,
  Image,
  StatusContainer,
  ImageDetail,
  PokemonNameDetail,
  PokemonNumberDetail,
  MovesFont,
  ButtonMoves,
  StatBar,
  PokeballDetail,
  BaseStyled,
  TotalStyled,
} from "../../pages/PokemonDetailPage/PokemonDetailPageStyled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";
import { ApiContext } from "../../context/useApiContext";
import HeaderPokemonDetail from "../../components/Header/HeaderPokemonDetail";
import { getColors } from "../../functions/ReturnCardColors";
import { ModalPokemon } from "../../modal/ModalPokemon";

const PokemonDetailPage = () => {
  const { id } = useParams();

  const { pokemons } = useContext(ApiContext);

  const pokemonDetail = pokemons.find((item) => item.id === parseInt(id));

  if (!pokemonDetail) {
    return null; // Return null or an error message if the Pokemon is not found
  }

  const { name, sprites, stats, types, moves } = pokemonDetail;

  const frontDefault = sprites?.front_default;
  const backDefault = sprites?.back_default;

  const total = stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  const color = getColors(types[0]);

  console.log("AQUI", pokemonDetail);

  return (
    <>
      <HeaderPokemonDetail excluirPokemon = {name}/>
      <Title>Detalhes</Title>
      <Container>
      
        <DetailsContainer style={{ backgroundColor: color }}>
          <FrontBackImageContainer>
            <Image src={frontDefault} alt="front" />
            <Image src={backDefault} alt="back" />
          </FrontBackImageContainer>

          <StatusContainer>
              <BaseStyled>Base Stats</BaseStyled>
              {stats.map((stat) => (
                <StatBar key={stat.stat.name}>
                  <div className="label">{stat.stat.name} </div>
                  <div className="bar">
                  {stat.base_stat}
                    <div
                      className="progress"
                      style={{ width: `${stat.base_stat}%` }}
                    />
                  </div>
                </StatBar>
                
              ))}
              <TotalStyled> Total: {total}</TotalStyled>
            </StatusContainer>
          
            <TypeContainer>
              <>
                <PokemonNumberDetail>{`# ${id}`}</PokemonNumberDetail>
                <PokemonNameDetail>{name}</PokemonNameDetail>
                <ImageDetail
                  src={sprites.other["official-artwork"].front_default}
                  alt=""
                />
                <br />
                {types.map((type) => (
                  <img key={type} src={getTypes(type)} alt="" />
                ))}
              </>
            </TypeContainer>
            <MovesContainer>
              <MovesFont>Moves:
              <div>
                {moves
                  .filter((move, id) => id < 5)
                  .map((item, id) => (
                    <ul>
                    <ButtonMoves key={id}>{item.move.name}</ButtonMoves>
                    </ul>
                  ))}
              </div>
              </MovesFont>
            </MovesContainer>

        </DetailsContainer>
        <PokeballDetail src={pokeball} alt="" />
      </Container>
      <ModalPokemon/>
    </>
  );
};

export default PokemonDetailPage;
