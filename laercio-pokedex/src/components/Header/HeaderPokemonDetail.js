import React, { useContext } from "react";
import "../Header/HeaderPokemonDetailStyled.css";
import image1 from "../../assets/logo.png";
import { goToHome, goToPokedex } from "../../routes/coordenator";
import { useNavigate } from "react-router-dom";
import { PokemonCardContext } from "../../context/PokemonCardContext";
import { IoChevronBackSharp } from "react-icons/io5";

const HeaderPokemonDetail = ({ excluirPokemon }) => {
  const { removePokemon } = useContext(PokemonCardContext);

  const navigate = useNavigate();
  return (
    <div className="div_detail">
      <div className="div_detail2">
        <div className="div_img_detail">
          <img
            onClick={() => goToHome(navigate)}
            src={image1}
            alt="logo-pokemon"
          />
        </div>
      </div>
      <div className="div_button_detail">
        <button
          onClick={() => removePokemon(excluirPokemon)}
          className="button_header_details"
        >
          Excluir da Pokédex
        </button>
      </div>
      <div className="div_botao">
        <button
          onClick={() => goToPokedex(navigate)}
          className="botao_headerPokedex"
        >
          <IoChevronBackSharp />
          Pokédex
        </button>
      </div>
    </div>
  );
};

export default HeaderPokemonDetail;
