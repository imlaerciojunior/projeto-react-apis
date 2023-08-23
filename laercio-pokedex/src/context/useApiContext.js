import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  const getPokemons = async () => {
    try {
      const endPoints = [];
      for (let i = 387; i <= 494; i++) {
        endPoints.push(axios.get(`${BASE_URL}/${i}`));
      }
      const response = await axios.all(endPoints);
      const fetchedPokemons = response.map((response) => response.data);
      setPokemons(fetchedPokemons);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <ApiContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
