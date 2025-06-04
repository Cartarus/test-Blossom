import { type customCharacter } from "../../store/slices/CharacterSlice"
import { AddComment } from "./AddComment"
import { Comment } from "./Comment"

interface CharacterCommentsProps {
  id: string
  comments: customCharacter['comments']
}

export const CharacterComments = ({ id, comments }: CharacterCommentsProps) => {
  

  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Comments</h2>
        <AddComment id={id} />
        <div className="flex flex-col-reverse gap-2 mt-4 ">
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    </div>
  )
}
