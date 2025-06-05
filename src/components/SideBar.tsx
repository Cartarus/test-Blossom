import { SearchSideBar } from "./SideBar/SearchSideBar";
import { StarredCharacters } from "./SideBar/StarredCharacters";
import { Characters } from "./SideBar/Characters";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/querys/getCharacters";
import type { Character } from "../gql/graphql";
import { loadCharacters, setFilter, setIsOpen } from "../store/slices/CharacterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { ResultsInfoFilter } from "./SideBar/ResultsInfoFilter";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface CharactersData {
  characters: {
    results: Character[];
  };
}

export const SideBar = () => {
  const dispatch = useDispatch();
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [showMessageFilterAdvanced, setShowMessageFilterAdvanced] = useState<boolean>(false);
  const navigate = useNavigate();
  const isOpen = useSelector((state: RootState) => state.characters.isOpen);
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

  useEffect(() => {
    const showMesageFilterAdvanced = () => {
      if (character !== "All" || specie !== "All" || sort !== "none") {
        setShowMessageFilterAdvanced(true)
      }else{
        setShowMessageFilterAdvanced(false)
      }
    };
    showMesageFilterAdvanced()
  }, [character, specie, sort, search])

  const handleBack = () => {
    setShowMessageFilterAdvanced(false)
    setShowPopover(true)
  };

  const handleDone = () => {
    dispatch(setFilter({
      character: "All",
      specie: "All",
      sort: "none",

    }))
    setShowMessageFilterAdvanced(false)
    navigate('/')
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        dispatch(setIsOpen(true))
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [dispatch])


  return (
    <aside
      className={`${
        isOpen ? "w-full" : "hidden lg:block"
      } lg:w-[375px] p-6 flex flex-col h-auto lg:h-screen`}
    >
      {showMessageFilterAdvanced && (
        <div className="flex lg:hidden justify-between items-center py-7 border-b border-gray-200">
          <button onClick={handleBack} className="text-primary-600 ">
            <MdArrowBack size={24} />
          </button>
          <p className=" font-semibold text-base">Advanced search</p>
          <p className="text-primary-600" onClick={handleDone}>Done</p>
        </div>
      )}
      <div className={`${showMessageFilterAdvanced ? "hidden" : ""} lg:block`}>
          <h2 className="text-3xl font-light mb-6">Rick and Morty list</h2>
          <SearchSideBar showPopover={showPopover} setShowPopover={setShowPopover} />
        </div>
      {showMesageFilter() && <ResultsInfoFilter />}
      <div className="flex flex-col flex-1 lg:min-h-0">
        <StarredCharacters showMessageFilter={showMesageFilter()} />
        <div className="flex-1 overflow-y-auto">
          <Characters />
        </div>
      </div>
    </aside>
  );
};
