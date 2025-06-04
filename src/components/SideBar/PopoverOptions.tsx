interface PopoverOptionsProps<T extends string> {
    title: string;
    options: T[];
    selected: T;
    setSelected: (selected: T) => void;
}

export const PopoverOptions = <T extends string>({ title, options, selected, setSelected }: PopoverOptionsProps<T>) => {
  return (
    <div className="flex flex-col">
        <h2 className=" font-medium text-base text-gray-500 mb-2">{title}</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.map((option) => (
            <button className={`border ${option === selected ? "bg-primary-100" : ""} border-gray-200 rounded-md px-4 py-3 text-sm font-medium text-gray-900`} onClick={() => setSelected(option)}>
              {option}
          </button>
          ))}
        </div>
      </div>
  )
}
