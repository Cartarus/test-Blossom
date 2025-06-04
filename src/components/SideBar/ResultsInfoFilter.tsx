import { useSelector } from "react-redux";
import { getFilteredCharacters, getFilteredStarredCharacters } from "../../store/slices/CharacterSlice";
import type { RootState } from "../../store/store";

export const ResultsInfoFilter = () => {
    const { character,specie,sort,search } = useSelector(
        (state: RootState) => state.characters.filter
      );
    const charactersFilteredStarred: number = useSelector((state: RootState) =>
        getFilteredStarredCharacters(state, state.characters.filter).length
      );

    const charactersFiltered:number = useSelector((state: RootState) =>
        getFilteredCharacters(state, state.characters.filter).length
      );

    const totalResults = ()=>{
        if(character === "Starred"){
            return charactersFilteredStarred
        }
        if(character === "All"){
            return charactersFilteredStarred + charactersFiltered
        }
        return charactersFiltered
    }

    const totalFiltersApplied = ()=>{
        let total = 0
        if(character !== "All"){
            total += 1
        }
        if(specie !== "All"){
            total += 1
        }
        if(sort !== "none"){
            total += 1
        }
        if(search !== ""){
            total += 1
        }
        return total
    }

  return (
    <div className='flex justify-between items-center px-5'>
        <p className=' text-[#2563EB] font-semibold text-base'>
         {totalResults()} Results
        </p>

        <p className=' text-[#3B8520]  font-semibold text-sm bg-[#63D83833] px-3 py-0.5 rounded-xl'>
        {totalFiltersApplied()} filter{totalFiltersApplied() > 1 ? "s" : ""}
        </p>
    </div>
  )
}
