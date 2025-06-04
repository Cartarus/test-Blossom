import { FiSearch } from "react-icons/fi";
import { TbAdjustments } from "react-icons/tb";

export const SearchSideBar = () => {
  return (
    <label className="flex items-center gap-2 bg-gray-100 py-4 px-5 rounded-md mb-4">
        <FiSearch size={20} fontStyle={'bold'} className="text-gray-500"/>
        <input type="text"  placeholder="Search or filter results" className="w-full focus:outline-none text-sm" />
        <TbAdjustments size={24}  className="text-primary-600"/>
    </label>
  )
}
