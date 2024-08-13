import { Children } from "react"
import './style.css'
import Link from "next/link"
import './style.css'

function CardContainer({children}) {
  return(
    <section  >
      <ul>
        {children}
      </ul>
    </section>
  )
}
export { CardContainer }


const PokeCard = ({ pokemon }) => {
  return (
    <div key={pokemon.id} className="card-container">
      {pokemon.id? (
        <>
          <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
          <div className="name-container">
          <Link className="pokemon-name" href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </div>
          <div className="types-container">   
            <div className="pokemon-types">
            {pokemon.types.map((type) => (
              <div key={type.type.name} className={`type-${type.type.name}`}>
                {type.type.name}
              </div>
            ))}
          
            </div>        
          </div>
          </>
      ) : (
        <img className="pokemon-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57c0ca5-c162-43e7-b0dc-40f215c30321/dg60lg7-e41bb0aa-053e-4471-8443-ff3fd9fa2e26.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1N2MwY2E1LWMxNjItNDNlNy1iMGRjLTQwZjIxNWMzMDMyMVwvZGc2MGxnNy1lNDFiYjBhYS0wNTNlLTQ0NzEtODQ0My1mZjNmZDlmYTJlMjYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.o7FaHDNqn_p8ZuGzlsUbApXf_LCm3s5Htt7JN7U_oiE"/>
        
      )}
    </div>
  );
} 
export { PokeCard}
