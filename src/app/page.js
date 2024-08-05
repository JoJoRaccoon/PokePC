

"use client"

import axios from "axios";
import { Header } from "@/Components/Header/Header";
import RootLayout from "./layout";
import { useEffect, useState } from "react";
import './style.css'
import Image from "next/image";
import { PokeCard } from "@/Components/CardContainer/CardContainer";




const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers:{
    'Content-type': 'application/json;charset=utf-8'
  },
  params: {
  }
})


const IndexPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=890');
        const promises = response.data.results.map((poke) => axios.get(poke.url));
        const results = await Promise.all(promises);
        const pokemonData = results.map((result) => result.data);
        setPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      {loading? (
        <div className="loader-container">
        <div className="loader-animation">
        </div>
         <div>
        </div>
         </div>
      ) : (
       <div> 
        <div>
          <Header />
        </div>
        <div key='CardList' className="CardList">
          {pokemon.map((poke) => (
            <PokeCard  key={poke.id} pokemon={poke} />
          ))}
        </div>
      </div>
      )}
    </div>
  );
}; export default IndexPage;







  
