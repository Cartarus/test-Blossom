import React from 'react'
import { ButtonStarred } from '../SideBar/ButtonStarred'

interface CharacterHeaderProps {
  image: string
  name: string
  isStarred: boolean
}

export const CharacterHeader = ({ image, name, isStarred }: CharacterHeaderProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center mb-2'>
        <div className="relative w-[75px] h-[75px]">
          <img
            src={image}
            alt={name}
            className='w-[75px] h-[75px] rounded-full object-cover border-2 border-gray-200'
          />
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
            <ButtonStarred isStarred={isStarred} />
          </div>
        </div>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
    </div>
  )
}
