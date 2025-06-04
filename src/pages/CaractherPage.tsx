
import { useSelector } from "react-redux";
import { CharacterHeader } from "../components/Character/CharacterHeader";
import { CharacterInfo } from "../components/Character/CharacterInfo";
import type { RootState } from "../store/store";
import { useParams } from "react-router";
import { getCharacterById } from "../store/slices/CharacterSlice";
import { MdError } from "react-icons/md";

export const CaractherPage = () => {
  const { id } = useParams()
  

  const character = useSelector((state: RootState) => getCharacterById(state, id ?? ''));

  if (!character) {
    return <div className="flex justify-center items-center h-screen">
      <MdError size={100} className="text-primary-600" />
      <p className="text-2xl font-bold">Character not found</p>
    </div>
  }

  return (
    
      <div
        className="px-[100px] flex flex-col gap-4"
      >
        <CharacterHeader image={character?.image ?? ''} name={character?.name ?? ''}/>
        <CharacterInfo specie={character?.species ?? ''} status={character?.status ?? ''}  />
      </div>
    
  );
};
