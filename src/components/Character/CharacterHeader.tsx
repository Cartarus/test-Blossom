import { ButtonStarred } from '../SideBar/ButtonStarred'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { getCharacterById } from '../../store/slices/CharacterSlice'

interface CharacterHeaderProps {
  image: string
  name: string
}

export const CharacterHeader = ({ image, name }: CharacterHeaderProps) => {
  const {id} = useParams()
  const character = useSelector((state: RootState) => getCharacterById(state, id ?? ''))
  return (
    <div className='flex flex-col'>
      <div className='flex items-center mb-2'>
        <div className="relative w-[75px] h-[75px]">
          <img
            src={image}
            alt={name}
            className='w-[75px] h-[75px] rounded-full object-cover border-2 border-gray-200'
          />
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
            <ButtonStarred isStarred={character?.isStarred ?? false} characterId={id ?? ''} />
          </div>
        </div>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
    </div>
  )
}
