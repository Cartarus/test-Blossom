import { FiSearch } from "react-icons/fi";
import { TbAdjustments } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import { PopoverFilter } from "./PopoverFilter";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/CharacterSlice";

interface SearchSideBarProps {
  showPopover: boolean
  setShowPopover: (show: boolean) => void
}

export const SearchSideBar = ({ showPopover, setShowPopover }: SearchSideBarProps) => {
  const [search, setSearchIntern] = useState<string>("")
  const dispatch = useDispatch()
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowPopover]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIntern(e.target.value)
    dispatch(setSearch(e.target.value))
  }

  return (
    <label className="flex items-center  bg-gray-100 px-5  mb-4 relative rounded-md">
        <FiSearch size={20} fontStyle={'bold'} className="text-gray-500"/>
        <input type="text"  placeholder="Search or filter results" className="w-full ml-2 focus:outline-none text-sm" value={search} onChange={handleOnChange} />
        <button 
          ref={buttonRef}
          className={`m-2 p-2 rounded-lg ${showPopover ? 'bg-primary-100' : ''}`}
        >
          <TbAdjustments 
            size={24}  
            className={`text-primary-600 cursor-pointer `} 
            onClick={() => setShowPopover(!showPopover)}
          />
        </button>
        {showPopover && (
          <div ref={popoverRef}>
            <PopoverFilter setShowPopover={setShowPopover} />
          </div>
        )}
    </label>
  )
}
