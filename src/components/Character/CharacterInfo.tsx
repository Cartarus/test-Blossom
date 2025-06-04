import { CharacterInfoItem } from "./CharacterInfoItem"

interface CharacterInfoProps {
  specie: string
  status: string
  occupation: string
}

export const CharacterInfo = ({ specie, status, occupation }: CharacterInfoProps) => {
  return (
    <div >
        <CharacterInfoItem title="Specie" value={specie} />
        <CharacterInfoItem title="Status" value={status} />
        <CharacterInfoItem title="Occupation" value={occupation} />
        </div>
  )
}
