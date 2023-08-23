import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage"

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PokemonsListPage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/details/:id" element={<PokemonDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router