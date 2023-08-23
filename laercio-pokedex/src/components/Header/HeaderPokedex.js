import React from "react";
import "../Header/HeaderPokedexStyled.css"
import image1 from "../../assets/logo.png";
import { goToHome } from "../../routes/coordenator";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5"

const HeaderPokedex = () => {
  const navigate = useNavigate()
  return (
    <div className="div_seila">
      <div className="div_seila2">
        <div className="div_imagem">
          <img onClick={()=>goToHome(navigate)} src={image1} alt="logo-pokemon" />
        </div>        
      </div>
      <div className="div_botao">
          <button onClick={()=>goToHome(navigate)} className="botao_headerPokedex"><IoChevronBackSharp/> Todos Pokémons</button>
      </div>
    </div>
  );
};

export default HeaderPokedex;