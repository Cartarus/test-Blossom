import { characters } from "../../utils/charactersMock";
import { CharacterItem } from "./CharacterItem";



export const StarredCharacters = () => {
  return (
    <>
      <h2 className="text-xs uppercase font-semibold text-gray-500  py-4 px-5">Starred Characters (2)</h2>
      <div className="flex flex-col">
      {characters.map((character) => (
          <CharacterItem key={character.name} image={character.image} name={character.name} species={character.species}  isStarred={true}/>
        ))}
      </div>
    </>
  );
};
