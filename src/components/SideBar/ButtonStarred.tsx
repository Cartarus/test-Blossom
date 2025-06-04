import { FaHeart } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { starCharacter, unstarCharacter } from "../../store/slices/CharacterSlice";


interface ButtonStarredProps {
    isStarred: boolean;
    characterId: string;
}

export const ButtonStarred = ({ isStarred, characterId }: ButtonStarredProps) => {
  const dispatch = useDispatch()
  const handleStar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (isStarred) {
      dispatch(unstarCharacter(characterId))
    } else {
      dispatch(starCharacter(characterId))
    }
  }
  return (
    <div>
        <button className={`rounded-full bg-white p-2 cursor-pointer  ${isStarred ? 'text-secondary-100' : 'text-gray-300'}`} onClick={handleStar}>
            {!isStarred ? <HiOutlineHeart size={24}/> : <FaHeart size={24}/>}
        </button>
    </div>
  )
}
