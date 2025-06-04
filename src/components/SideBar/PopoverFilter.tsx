import { useState } from "react";
import { PopoverOptions } from "./PopoverOptions";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, type Filter } from "../../store/slices/CharacterSlice";
import type { RootState } from "../../store/store";
import { MdArrowBack } from "react-icons/md";

const options_character: Filter["character"][] = ["All", "Starred", "Others"];
const options_specie: Filter["specie"][] = ["All", "Human", "Alien"];
const options_sort: Filter["sort"][] = ["none", "A-Z", "Z-A"];

interface PopoverFilterProps {
  setShowPopover: (show: boolean) => void;
}

export const PopoverFilter = ({ setShowPopover }: PopoverFilterProps) => {
  const { character, specie, sort } = useSelector(
    (state: RootState) => state.characters.filter
  );

  const [selectedCharacter, setSelectedCharacter] =
    useState<Filter["character"]>(character);
  const [selectedSpecie, setSelectedSpecie] =
    useState<Filter["specie"]>(specie);
  const [selectedSort, setSelectedSort] = useState<Filter["sort"]>(sort);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(
      setFilter({
        character: selectedCharacter,
        specie: selectedSpecie,
        sort: selectedSort,
      })
    );
    setShowPopover(false);
  };

  return (

    <div className="fixed lg:absolute inset-0 lg:inset-auto lg:right-0 lg:top-full mt-0 lg:mt-2 z-10 p-6 bg-white border border-gray-200 rounded-none lg:rounded-md lg: w-full shadow-lg flex flex-col h-full gap-6 lg:h-auto justify-between">
      <div className="flex flex-col gap-6">
      <div className="flex lg:hidden justify-between items-center">
        <button
          onClick={() => setShowPopover(false)}
          className="text-primary-600 "
        >
          <MdArrowBack size={24} />
        </button>
        <p className=" font-semibold text-base">Filters</p>
        <div className="w-10 h-10"></div>
      </div>
      {/* Character */}
      <PopoverOptions
        title="Character"
        options={options_character}
        selected={selectedCharacter}
        setSelected={setSelectedCharacter}
      />
      {/* Species */}
      <PopoverOptions
        title="Specie"
        options={options_specie}
        selected={selectedSpecie}
        setSelected={setSelectedSpecie}
      />
      {/* Sort */}
      <PopoverOptions
        title="Sort"
        options={options_sort}
        selected={selectedSort}
        setSelected={setSelectedSort}
      />
      </div>
      {/* FilterButton */}
      <button
        className="bg-primary-600 text-white rounded-md px-4 py-3 text-sm font-medium"
        onClick={handleOnClick}
      >
        Filter
      </button>
    </div>

  );
};
