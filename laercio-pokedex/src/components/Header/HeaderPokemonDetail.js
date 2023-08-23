import React from "react";
import "../Header/HeaderPokemonDetailStyled.css";
import image1 from "../../assets/logo.png";
import { goToHome, goToPokedex } from "../../routes/coordenator";
import { useNavigate } from "react-router-dom";

const HeaderPokemonDetail = () => {
  const navigate = useNavigate()
  return (
    <div className="div_detail">
      <div className="div_detail2">
        <div className="div_img_detail">
          <img onClick={()=>goToHome(navigate)} src={image1} alt="logo-pokemon" />
        </div>        
      </div>
      <div className="div_button_detail">
          <button onClick={()=>goToPokedex(navigate)} className="button_header_details">Excluir da Pokédex</button>
      </div>
    </div>
  );
};

export default HeaderPokemonDetail;