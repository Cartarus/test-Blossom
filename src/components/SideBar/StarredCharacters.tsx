import { CharacterItem } from "./CharacterItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
  getFilteredStarredCharacters,
  type customCharacter,
} from "../../store/slices/CharacterSlice";

interface StarredCharactersProps {
  showMesageFilter: boolean;
}

export const StarredCharacters = ({
  showMesageFilter,
}: StarredCharactersProps) => {
  const { character } = useSelector(
    (state: RootState) => state.characters.filter
  );

  const characters: customCharacter[] = useSelector((state: RootState) =>
    getFilteredStarredCharacters(state, state.characters.filter)
  );

  if (character !== "Others") {
    return (
      <>
        {!showMesageFilter && (
          <h2 className="text-xs uppercase font-semibold text-gray-500  py-4 px-5">
            Starred Characters ({characters.length})
          </h2>
        )}

        <div>
          <div
            className={`flex flex-col ${
              characters.length > 2
                ? "overflow-y-scroll h-[160px] scroll-visible"
                : ""
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
  }
};
