import {  useState } from "react";
import { PopoverOptions } from "./PopoverOptions";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, type Filter } from "../../store/slices/CharacterSlice";
import type { RootState } from "../../store/store";

const options_character: Filter['character'][] = ["All", "Starred", "Others"]
const options_specie: Filter['specie'][] = ["All", "Human", "Alien"]

interface PopoverFilterProps {
  setShowPopover: (show: boolean) => void
}

export const PopoverFilter = ({ setShowPopover }: PopoverFilterProps) => {

  const { character, specie} = useSelector((state: RootState) => state.characters.filter)

  const [selectedCharacter, setSelectedCharacter] = useState<Filter['character']>(character)
  const [selectedSpecie, setSelectedSpecie] = useState<Filter['specie']>(specie)
  const dispatch = useDispatch()

  


  const handleOnClick = () => {
    dispatch(setFilter({ character: selectedCharacter, specie: selectedSpecie}))
    setShowPopover(false)
  }
    
  return (
    <div className="absolute right-0 top-full mt-2 z-10 p-6  bg-white border border-gray-200 rounded-md shadow-lg w-full flex flex-col gap-6">
        {/* Character */}   
      <PopoverOptions title="Character" options={options_character} selected={selectedCharacter} setSelected={setSelectedCharacter} />
      {/* Species */}
      <PopoverOptions title="Specie" options={options_specie} selected={selectedSpecie} setSelected={setSelectedSpecie} />
      {/* FilterButton */}
      <button className="bg-primary-600 text-white rounded-md px-4 py-3 text-sm font-medium" onClick={handleOnClick}>
        Filter
      </button>
    </div>
  );
};
