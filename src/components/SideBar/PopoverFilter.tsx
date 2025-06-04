import {  useState } from "react";
import { PopoverOptions } from "./PopoverOptions";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, type Filter } from "../../store/slices/CharacterSlice";
import type { RootState } from "../../store/store";

const options_character: Filter['character'][] = ["All", "Starred", "Others"]
const options_specie: Filter['specie'][] = ["All", "Human", "Alien"]
const options_sort: Filter['sort'][] = ["none", "A-Z", "Z-A"]

interface PopoverFilterProps {
  setShowPopover: (show: boolean) => void
}

export const PopoverFilter = ({ setShowPopover }: PopoverFilterProps) => {

  const { character, specie, sort} = useSelector((state: RootState) => state.characters.filter)

  const [selectedCharacter, setSelectedCharacter] = useState<Filter['character']>(character)
  const [selectedSpecie, setSelectedSpecie] = useState<Filter['specie']>(specie)
  const [selectedSort, setSelectedSort] = useState<Filter['sort']>(sort)
  const dispatch = useDispatch()

  


  const handleOnClick = () => {
    dispatch(setFilter({ character: selectedCharacter, specie: selectedSpecie, sort: selectedSort }))
    setShowPopover(false)
  }
    
  return (
    <div className="absolute right-0 top-full mt-2 z-10 p-6  bg-white border border-gray-200 rounded-md shadow-lg w-full flex flex-col gap-6">
        {/* Character */}   
      <PopoverOptions title="Character" options={options_character} selected={selectedCharacter} setSelected={setSelectedCharacter} />
      {/* Species */}
      <PopoverOptions title="Specie" options={options_specie} selected={selectedSpecie} setSelected={setSelectedSpecie} />
      {/* Sort */}
      <PopoverOptions title="Sort" options={options_sort} selected={selectedSort} setSelected={setSelectedSort} />
      {/* FilterButton */}
      <button className="bg-primary-600 text-white rounded-md px-4 py-3 text-sm font-medium" onClick={handleOnClick}>
        Filter
      </button>
    </div>
  );
};
