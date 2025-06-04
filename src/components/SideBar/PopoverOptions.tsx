interface PopoverOptionsProps {
    title: string;
    options: string[];
}


export const PopoverOptions = ({ title, options }: PopoverOptionsProps) => {
  return (
    <div className="flex flex-col">
        <h2 className=" font-medium text-base text-gray-500 mb-2">{title}</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.map((option) => (
            <button className={`border ${option === "All" ? "bg-primary-100" : ""} border-gray-200 rounded-md px-4 py-3 text-sm font-medium text-gray-900`}>
              {option}
          </button>
          ))}
        </div>
      </div>
  )
}
