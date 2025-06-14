
import { IoPersonCircleSharp } from "react-icons/io5";
import type { Comment } from "../../store/slices/CharacterSlice";
interface CommentProps {
  comment: Comment
}

export const CommentItem = ({ comment }: CommentProps) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md">
      <div className="flex items-center gap-2">
        <IoPersonCircleSharp size={50} />
        <div className="flex flex-col gap-2">
          <div className="text-sm font-bold">Cristian Guerrero</div>
          <div className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
        </div>
      </div>
      <div className="text-sm">{comment.comment}</div>
    </div>
                
  )
}