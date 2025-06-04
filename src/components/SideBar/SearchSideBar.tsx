import { FiSearch } from "react-icons/fi";
import { TbAdjustments } from "react-icons/tb";
import { useState } from "react";
import { PopoverFilter } from "./PopoverFilter";

export const SearchSideBar = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  return (
    <label className="flex items-center gap-2 bg-gray-100 px-5  mb-4 relative rounded-md">
        <FiSearch size={20} fontStyle={'bold'} className="text-gray-500"/>
        <input type="text"  placeholder="Search or filter results" className="w-full focus:outline-none text-sm" />
        <button className={`m-2 p-2 rounded-lg ${showPopover ? 'bg-primary-100' : ''}`}>
        <TbAdjustments 
          size={24}  
          className={`text-primary-600 cursor-pointer `} 
          onClick={() => setShowPopover(!showPopover)}
        />
        </button>
        {showPopover && (
          <PopoverFilter />
        )}
    </label>
  )
}
