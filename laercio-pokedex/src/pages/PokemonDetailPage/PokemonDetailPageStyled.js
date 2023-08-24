import styled from "styled-components";

export const Container = styled.div`
  background-color: #5e5e5e;
  width: 100vw;
  height: 120vh;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  overflow-x: hidden;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-right: 20px;
  gap: 50px;
  width: 1280px;
  height: 650px;
  border-radius: 2.36788rem;
  
`;

export const Title = styled.span`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  background-color: #5e5e5e;
  font-size: 40px;
  font-weight: 700;
  overflow-x: hidden;
  width: 100vw;
  padding-top: 20px;
    
`;

export const FrontBackImageContainer = styled.div`
  height: 38.19rem;
  width: 17.625rem;
  margin-top: 30px;
  margin-left: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  background-color: #ffffff;
  margin-bottom: 30px;
`;

export const StatusContainer = styled.div`
  font-family: Montserrat, sans-serif;
  margin-top: 30px;
  width: 343px;
  height: 580px;
  top: 24px;
  left: 360px;
  border-radius: 12px;
  background-color: #ffff;
`;

export const TypeContainer = styled.div`
  width: 292px;
  height: 453px;
  top: 184px;
  left: 771px;
  border-radius: 8px;
  
`;

export const MovesContainer = styled.div`
  position: absolute;
  margin-top: 380px;
  margin-left: 40px;
  width: 292px;
  height: 300px;
  top: 184px;
  left: 771px;
  border-radius: 17px;
  background: #ffffff;
  z-index: 2;
`;

export const MovesFont = styled.div`
  display: flex;
  align-items: start;
  width: 74px;
  height: 17px;
  font-family: Montserrat, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ButtonMoves = styled.button`
  margin-top: 20px;
  margin-left: -60px;
  border-radius: 12px;
  width: 200px;
  height: 37px;
  font-size: normal;
  border: 1px;
  text-transform: capitalize;
  
  &:hover {
    background-color: lightgrey;
  }
`;

export const ImageDetail = styled.img`
  position: absolute;
  width: 290px;
  height: 290px;
  top: 216px;
  left: 1050px;
  z-index: 2;
`;

export const PokemonNameDetail = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 2px;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  text-transform: capitalize;
  color: #ffff;
`;

export const PokemonNumberDetail = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #ffff;
`;

export const StatBar = styled.div`
  display: flex;
  margin-bottom: 10px;
  text-transform: capitalize;
  margin-right: 20px;

  .label {
    width: 180px;
    font-weight: bold;
    justify-content: center;
    margin-left: 20px;
  }

  .bar {
    flex: 1;
    height: 10px;
    border-radius: 10px;
    position: relative;

    .progress {
      height: 100%;
      background-color: orange;
      border-radius: 10px;
      &:hover {
        background-color: lightsalmon;
      }
    }
  }
`;

export const PokeballDetail = styled.img`
  position: absolute;
  top: -13px;
  right: -30px;
  width: 500px;
  height: 500px;
  flex-shrink: 0;
  margin-top: 210px;
  margin-left: 70px;
`;

export const BaseStyled = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 20px;
  font-family: Montserrat, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 17px;
`;

export const TotalStyled = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 200px;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 17px;
  &:hover{
    color: orange;
  }
  cursor: pointer;
`;
