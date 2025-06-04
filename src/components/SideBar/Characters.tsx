import { useSelector } from "react-redux"
import { CharacterItem } from "./CharacterItem"
import type { RootState } from "../../store/store"
import type { Character } from "../../gql/graphql"

export const Characters = () => {
  const characters: Character[] = useSelector((state: RootState) => state.characters.characters)
  return (
    <>
      <h2 className="text-xs uppercase font-semibold text-gray-500  py-4 px-5">Characters ({characters.length})</h2>
    <div className="flex flex-col overflow-y-auto">
        {characters.map((character) => (
            <CharacterItem key={character.id} character={character} isStarred={false} />
        ))}
    </div>
    </>
  )
}
