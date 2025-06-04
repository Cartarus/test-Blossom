import { ButtonStarred } from "./ButtonStarred";
import type { Character } from "../../gql/graphql";

interface props {
  character: Character
  isStarred: boolean
}

export const CharacterItem = ({ character, isStarred }: props) => {
  return (
    <div className=" rounded-lg  ">
      <div className={`flex items-center justify-between mx-5 py-5 ${!isStarred ? 'border-t border-gray-200' : ''}`}>
        <div className="flex items-center ">
          <img src={character.image ?? ''} alt="Character" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col ml-4">
            <p className="text-base font-semibold">{character.name}</p>
            <p className="text-base font-normal text-gray-500">{character.species}</p>
          </div>
        </div>
        <ButtonStarred isStarred={isStarred} characterId={character.id ?? ''} />
      </div>
    </div>
  );
};
