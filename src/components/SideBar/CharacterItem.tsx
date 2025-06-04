import { ButtonStarred } from "./ButtonStarred";

interface props {
  image: string;
  name: string;
  species: string;
  isStarred: boolean;
}

export const CharacterItem = ({ image, name, species, isStarred }: props) => {
  return (
    <div className=" rounded-lg  ">
      <div className={`flex items-center justify-between mx-5 py-5 ${!isStarred ? 'border-t border-gray-200' : ''}`}>
        <div className="flex items-center ">
          <img src={image} alt="Character" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col ml-4">
            <p className="text-base font-semibold">{name}</p>
            <p className="text-base font-normal text-gray-500">{species}</p>
          </div>
        </div>
        <ButtonStarred isStarred={isStarred} />
      </div>
    </div>
  );
};
