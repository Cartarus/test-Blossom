
import { CharacterHeader } from "../components/Character/CharacterHeader";
import { CharacterInfo } from "../components/Character/CharacterInfo";

export const CaractherPage = () => {
  // Datos de ejemplo, reemplaza por props o datos reales
  const character = {
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    name: "Abadango Cluster Princess",
    specie: "Alien",
    status: "Alive",
    occupation: "Princess",
  };

  return (
    
      <div
        className="px-[100px] flex flex-col gap-4"
      >
        <CharacterHeader image={character.image} name={character.name} isStarred={true} />
        <CharacterInfo specie={character.specie} status={character.status} occupation={character.occupation} />
      </div>
    
  );
};
