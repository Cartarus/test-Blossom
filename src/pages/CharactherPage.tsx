
import { useDispatch, useSelector } from "react-redux";
import { CharacterHeader } from "../components/Character/CharacterHeader";
import { CharacterInfo } from "../components/Character/CharacterInfo";
import type { RootState } from "../store/store";
import { useNavigate, useParams } from "react-router";
import { getCharacterById, setIsOpen } from "../store/slices/CharacterSlice";
import { MdArrowBack, MdError } from "react-icons/md";
import { CharacterComments } from "../components/Character/CharacterComments";

export const CharacterPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const character = useSelector((state: RootState) => getCharacterById(state, id ?? ''));

  if (!character) {
    return <div className="flex justify-center items-center h-screen">
      <MdError size={100} className="text-primary-600" />
      <p className="text-2xl font-bold">Character not found</p>
    </div>
  }

  const handleBack = () => {
    dispatch(setIsOpen(true))
    navigate('/')
  }

  return (
    
      <div
        className="lg:px-[100px] px-4 flex flex-col gap-4  h-full overflow-y-auto"
      >
        <div className="flex flex-col gap-4">
        <button onClick={handleBack} className="text-primary-600 lg:hidden">
          <MdArrowBack size={24} />
        </button>
        <CharacterHeader image={character?.image ?? ''} name={character?.name ?? ''}/>
        <CharacterInfo specie={character?.species ?? ''} status={character?.status ?? ''}  />
        <CharacterComments id={character?.id ?? ''} comments={character?.comments ?? []} />
        </div>
      </div>
    
  );
};
