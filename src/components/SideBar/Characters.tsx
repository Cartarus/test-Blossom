import { useSelector } from "react-redux";
import { CharacterItem } from "./CharacterItem";
import type { RootState } from "../../store/store";
import {
  getFilteredCharacters,
  type customCharacter,
} from "../../store/slices/CharacterSlice";

export const Characters = () => {
  const characters: customCharacter[] = useSelector((state: RootState) =>
    getFilteredCharacters(state, state.characters.filter)
  );

  const { character } = useSelector(
    (state: RootState) => state.characters.filter
  );

  if (character !== "Starred") {
    return (
      <>
        <h2 className="text-xs uppercase font-semibold text-gray-500  py-4 px-5">
          Characters ({characters.length})
        </h2>
        <div className="flex flex-col overflow-y-auto">
          {characters.map((character) => (
            <CharacterItem
              key={character.id}
              character={character}
              isStarred={character.isStarred}
            />
          ))}
        </div>
      </>
    );
  }
};
