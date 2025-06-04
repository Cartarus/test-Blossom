import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Character } from '../../gql/graphql'
import type { RootState } from '../store'

export type Filter = {
  character: 'All' | 'Starred' | 'Others'
  specie: 'All' | 'Human' | 'Alien'
}

export interface customCharacter extends Character {
  isStarred: boolean
}

// Define a type for the slice state
interface CharacterState {
  characters: customCharacter[]
  filter: Filter & { search: string }
}

// Define the initial state using that type
const initialState: CharacterState = {
  characters: [],
  filter: {
    character: 'All',
    specie: 'All',
    search: ''
  }
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    loadCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload.map(character => ({ ...character, isStarred: false }))
    },
    starCharacter: (state, action: PayloadAction<Character['id']>) => {
      const character = state.characters.find(character => character.id === action.payload)
      if (character) {
        character.isStarred = true
      }
      state.characters = state.characters.map(character => character.id === action.payload ? { ...character, isStarred: true } : character)

    },
    unstarCharacter: (state, action: PayloadAction<Character['id']>) => {
      const character = state.characters.find(character => character.id === action.payload)
      if (character) {
        character.isStarred = false
      }
      state.characters = state.characters.map(character => character.id === action.payload ? { ...character, isStarred: false } : character)
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = { ...state.filter, ...action.payload }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filter.search = action.payload
    }
  },
})


export const { loadCharacters, setFilter, starCharacter, unstarCharacter, setSearch } = charactersSlice.actions

export const getCharacterById = (state: RootState, id: string) => {
  return state.characters.characters.find(character => character.id === id)
}

export const getFilteredCharacters = (state: RootState, filter: Filter): customCharacter[] => {
  return state.characters.characters.filter(character => {
    const matchesCharacterFilter = 
      (filter.character === 'All' && !character.isStarred) ||
      (filter.character === 'Starred' && character.isStarred) ||
      (filter.character === 'Others' && !character.isStarred);

    const matchesSpecieFilter =
      filter.specie === 'All' ||
      (filter.specie === 'Human' && character.species === 'Human') ||
      (filter.specie === 'Alien' && character.species === 'Alien');

    return matchesCharacterFilter && matchesSpecieFilter;
  });
}


export default charactersSlice.reducer