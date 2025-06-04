import { PopoverOptions } from "./PopoverOptions";

export const PopoverFilter = () => {
  return (
    <div className="absolute right-0 top-full mt-2 z-10 p-6  bg-white border border-gray-200 rounded-md shadow-lg w-full flex flex-col gap-6">
        {/* Character */}
      <PopoverOptions title="Character" options={["All", "Starred", "Others"]} />
      {/* Species */}
      <PopoverOptions title="Specie" options={["All", "Human", "Alien"]} />
      {/* FilterButton */}
      <button className="bg-primary-600 text-white rounded-md px-4 py-3 text-sm font-medium">
        Filter
      </button>
    </div>
  );
};
