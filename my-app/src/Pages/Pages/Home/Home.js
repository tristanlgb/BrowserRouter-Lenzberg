import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
const Home = () => {
    const [ pokemonList, setPokemonList ] = useState ([]);
    const getPokemons = fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",
        {
            method: "GET",
        }
    );
    useEffect(() => { getPokemons
        .then(resp => resp.json())
        .then((data) => {
            setPokemonList(data.results);
            console.log (data.results);
         })
        .catch((error) => { console.log(error) });
     }, []);

    return (
    <div>
        {pokemonList.map ((pokemon)=> (<Pokemon key={pokemon.name} pokemonItem = {pokemon}/>
        ))} 
    </div>
    );
    };

    export default Home