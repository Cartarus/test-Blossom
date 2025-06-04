import { characters } from "../../utils/charactersMock"
import { CharacterItem } from "./CharacterItem"

export const Characters = () => {
  return (
    <>
      <h2 className="text-xs uppercase font-semibold text-gray-500  py-4 px-5">Characters (3)</h2>
    <div className="flex flex-col">
        {characters.map((character) => (
            <CharacterItem key={character.name} image={character.image} name={character.name} species={character.species} isStarred={false} />
        ))}
    </div>
    </>
  )
}
