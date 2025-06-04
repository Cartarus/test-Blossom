import { useEffect, useState } from "react";
import { PopoverOptions } from "./PopoverOptions";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/slices/CharacterSlice";

const options_character: string[] = ["All", "Starred", "Others"]
const options_specie: string[] = ["All", "Human", "Alien"]

export const PopoverFilter = () => {

  const [selectedCharacter, setSelectedCharacter] = useState<string>("All")
  const [selectedSpecie, setSelectedSpecie] = useState<string>("All")
  const dispatch = useDispatch()

  

  useEffect(() => {
    dispatch(setFilter({ character: selectedCharacter, specie: selectedSpecie }))
  }, [selectedCharacter, selectedSpecie, dispatch])
    
  return (
    <div className="absolute right-0 top-full mt-2 z-10 p-6  bg-white border border-gray-200 rounded-md shadow-lg w-full flex flex-col gap-6">
        {/* Character */}   
      <PopoverOptions title="Character" options={options_character} selected={selectedCharacter} setSelected={setSelectedCharacter} />
      {/* Species */}
      <PopoverOptions title="Specie" options={options_specie} selected={selectedSpecie} setSelected={setSelectedSpecie} />
      {/* FilterButton */}
      <button className="bg-primary-600 text-white rounded-md px-4 py-3 text-sm font-medium">
        Filter
      </button>
    </div>
  );
};
