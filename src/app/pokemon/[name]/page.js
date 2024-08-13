import axios from "axios";
import './page.css'
import { Header } from "@/Components/Header/Header";

const PokemonPage = async ({ params }) => {
  const { name } = params;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = response.data;

  return (
<>
<Header/>

<div className="details-container">
 <div className="pokemon-detail-container">
  
    <div className="image-container">
          <img className="pokemon-img-details" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    </div>

    <div className="container-detail-name">
       <h1 className="pokemon-detail-name">{pokemon.name}</h1>
    </div>

    <div className="info-container">
    <div>  
     <div className="pokemon-detail-types">
      <h3 className="detail-titles">Types</h3>
      <div className="types-container-details">
        {pokemon.types.map((type) => (
          <div key={type.type.name} className={`type-details-${type.type.name}`}>
                {type.type.name}
              </div>
            ))}
      </div>
      </div>
    </div>
      <div className="container-info-weight">
          <h3 className="detail-titles">Weight</h3>
          <p className="pokemon-weight">{pokemon.weight} kg</p>
        </div>
        
        <div className="container-info-abilities">
          <h3 className="detail-titles">Abilities</h3>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li 
              key={ability.ability.name} 
              className="pokemon-abilities">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="container-info-stats">
          <h3 className="detail-titles">Stats</h3>
          <ul className="pokemon-stats">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
 </div> 
</>
  );
};

export default PokemonPage;