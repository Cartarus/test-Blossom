import { SearchSideBar } from "./SideBar/SearchSideBar";
import { StarredCharacters } from "./SideBar/StarredCharacters";
import { Characters } from "./SideBar/Characters";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/querys/getCharacters";
import type { Character } from "../gql/graphql";
import { loadCharacters } from "../store/slices/CharacterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

interface CharactersData {
  characters: {
    results: Character[];
  };
}



export const SideBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.characters.isOpen)
  useQuery<CharactersData>(GET_CHARACTERS, {
    variables: {
      page: 1,
    },
    onCompleted: (data) => {
      dispatch(loadCharacters(data.characters.results));
    },
  });
  return (
    <aside className={`${isOpen ? "w-full" : "hidden lg:block"} lg:w-[375px]  p-6  flex-col `}>
      <h2 className="text-3xl font-light mb-6 ">Rick and Morty list</h2>
      <SearchSideBar />
      <StarredCharacters />
      <Characters />
      {/* Aquí puedes agregar el contenido del sidebar, como la lista de personajes */}
    </aside>
  );
};
