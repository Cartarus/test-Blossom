import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/slices/CharacterSlice";

interface AddCommentProps {
  id: string
}

export const AddComment = ({ id }: AddCommentProps) => {
    const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const handleAddComment = () => {
    dispatch(addComment({ id: id, comment: comment }))
    setComment('')
  }
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Add a comment"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddComment();
          }
        }}
      />
      <button
        className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 cursor-pointer"
        onClick={() => handleAddComment()}
      >
        Add
      </button>
    </div>
  );
};
