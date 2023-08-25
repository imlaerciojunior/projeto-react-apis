import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ApiProvider from "./context/useApiContext";
import PokemonCardProvider from "./context/PokemonCardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <PokemonCardProvider>
      <ApiProvider> 
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApiProvider>
    </PokemonCardProvider>
  
);
