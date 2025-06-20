import { ButtonStarred } from "./ButtonStarred";
import type { Character } from "../../gql/graphql";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { deleteCharacter, setIsOpen } from "../../store/slices/CharacterSlice";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { FaRegTrashCan } from "react-icons/fa6";

interface props {
  character: Character
  isStarred: boolean
}

export const CharacterItem = ({ character, isStarred }: props) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  const isSmallScreen = useMediaQuery('(max-width: 1023px)') // lg breakpoint is 1024px

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    
    if (isSmallScreen) {
      dispatch(setIsOpen(false))
    }
    navigate(`/character/${character.id}`)
  }

  const handleDelete = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    if(character.id){
      dispatch(deleteCharacter(character.id))
    }
  }

  return (
    <div className={`rounded-lg  cursor-pointer ${id === character.id ? 'bg-primary-100' : ''}`} onClick={handleClick}>
      <div className={`flex items-center justify-between mx-5 py-4 ${!isStarred ? 'border-t border-gray-200' : ''}`}>
        <div className="flex items-center ">
          <img src={character.image ?? ''} alt="Character" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col ml-4">
            <p className="text-base font-semibold">{character.name}</p>
            <p className="text-base font-normal text-gray-500">{character.species}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ButtonStarred isStarred={isStarred} characterId={character.id ?? ''} />
          {id !== character.id && <FaRegTrashCan className="text-gray-300 hover:text-red-300 cursor-pointer" size={22} onClick={handleDelete} />}
        </div>
      </div>
    </div>
  );
};
