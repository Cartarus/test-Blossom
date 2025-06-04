import { CharacterItem } from "./CharacterItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { customCharacter } from "../../store/slices/CharacterSlice";

export const StarredCharacters = () => {
  const characters: customCharacter[] = useSelector(
    (state: RootState) => state.characters.characters.filter(character => character.isStarred)
  );
  return (
    <>
      <h2 className="text-xs uppercase font-semibold text-gray-500  py-4 px-5">
        Starred Characters ({characters.length})
      </h2>
      <div>
        <div
          className={`flex flex-col ${
            characters.length > 3 ? "overflow-y-scroll h-[264px] scroll-visible" : ""
          }`}
        >
          {characters.map((character) => (
            <CharacterItem
              key={character.id}
              character={character}
              isStarred={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};
