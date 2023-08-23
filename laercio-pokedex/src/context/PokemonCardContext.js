import React, {createContext,useEffect,useState} from "react"


export const PokemonCardContext = createContext()

const PokemonCardProvider = ({children})=>{
   
    const [pokemonCart, setPokemonCart] = useState([])
    // const [name,setName] = useState([])
    const [pokemonAmount, setPokemonAmount] = useState(0);

   useEffect(()=>{
    if(pokemonCart){
        const amount = pokemonCart.reduce((accmulator, currentItem)=>accmulator +1,0)
        setPokemonAmount(amount)
    }
   },[pokemonCart])

   const addToPokedex = (pokemon, name) =>{
    const checkPokemon = pokemonCart.find((pokemon)=>pokemon.name === name)
    if(checkPokemon){
        
        console.log('pokemon capturado');
        return
    }
    setPokemonCart([...pokemonCart,{pokemon,name, amount: 1}])
   }


return(
    <PokemonCardContext.Provider value={{pokemonCart,pokemonAmount,addToPokedex}}>
        {children}
    </PokemonCardContext.Provider>

)


}

export default PokemonCardProvider