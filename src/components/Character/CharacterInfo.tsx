import { CharacterInfoItem } from "./CharacterInfoItem"

interface CharacterInfoProps {
  specie: string
  status: string
}

export const CharacterInfo = ({ specie, status  }: CharacterInfoProps) => {
  return (
    <div >
        <CharacterInfoItem title="Specie" value={specie} />
        <CharacterInfoItem title="Status" value={status} />
        </div>
  )
}
