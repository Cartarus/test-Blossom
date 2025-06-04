import { SearchSideBar } from "./SideBar/SearchSideBar";
import { StarredCharacters } from "./SideBar/StarredCharacters";
import { Characters } from "./SideBar/Characters";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/querys/getCharacters";
import type { Character } from "../gql/graphql";
import { loadCharacters } from "../store/slices/CharacterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { ResultsInfoFilter } from "./SideBar/ResultsInfoFilter";

interface CharactersData {
  characters: {
    results: Character[];
  };
}



export const SideBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.characters.isOpen)
  const { character, specie, sort, search } = useSelector(
    (state: RootState) => state.characters.filter
  );
  useQuery<CharactersData>(GET_CHARACTERS, {
    variables: {
      page: 1,
    },
    onCompleted: (data) => {
      dispatch(loadCharacters(data.characters.results));
    },
  });

  const showMesageFilter = () => {
    if (
      character !== "All" ||
      specie !== "All" ||
      sort !== "none" ||
      search !== ""
    ) {
      return true;
    }
    return false;
  };
  return (
    <aside className={`${isOpen ? "w-full" : "hidden lg:block"} lg:w-[375px] p-6 flex flex-col h-auto lg:h-screen`}>
      <h2 className="text-3xl font-light mb-6">Rick and Morty list</h2>
      <SearchSideBar />
      {showMesageFilter() && <ResultsInfoFilter /> }
      <div className="flex flex-col flex-1 lg:min-h-0">
        <StarredCharacters showMesageFilter={showMesageFilter()} />
        <div className="flex-1 overflow-y-auto">
          <Characters />
        </div>
      </div>
    </aside>
  );
};
