import { FaHeart } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";


interface ButtonStarredProps {
    isStarred: boolean;
}

export const ButtonStarred = ({ isStarred }: ButtonStarredProps) => {
  return (
    <div>
        <button className={`rounded-full bg-white p-2 cursor-pointer  ${isStarred ? 'text-secondary-100' : 'text-gray-300'}`}>
            {!isStarred ? <HiOutlineHeart size={24}/> : <FaHeart size={24}/>}
        </button>
    </div>
  )
}
