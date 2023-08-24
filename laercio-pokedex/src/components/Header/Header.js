import React from "react";
import "../Header/HeaderStyled.css";
import image1 from "../../assets/logo.png";
import { goToHome, goToPokedex } from "../../routes/coordenator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="div1">
      <div className="div2">
        <div className="div_img">
          <img onClick={()=>goToHome(navigate)} src={image1} alt="logo-pokemon" />
        </div>        
      </div>
      <div className="div_button">
          <button onClick={()=>goToPokedex(navigate)} className="button_header" >Pokédex</button>
      </div>
    </div>
  );
};

export default Header;