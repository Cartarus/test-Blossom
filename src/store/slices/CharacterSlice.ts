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
  comments: string[]
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
      state.characters = action.payload.map(character => ({ ...character, isStarred: false, comments: [] }))
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
    },
    addComment: (state, action: PayloadAction<{ id: string, comment: string }>) => {
      const character = state.characters.find(character => character.id === action.payload.id)
      if (character) {
        character.comments.push(action.payload.comment)
      }
    }
  },
})


export const { loadCharacters, setFilter, starCharacter, unstarCharacter, setSearch, addComment } = charactersSlice.actions

export const getCharacterById = (state: RootState, id: string) => {
  return state.characters.characters.find(character => character.id === id)
}

export const getFilteredCharacters = (state: RootState, filter: Filter & { search: string }): customCharacter[] => {
  return state.characters.characters.filter(character => {
    
    const matchesCharacterFilter = 
      (filter.character === 'All' && !character.isStarred) ||
      (filter.character === 'Starred' && character.isStarred) ||
      (filter.character === 'Others' && !character.isStarred);

    const matchesSpecieFilter =
      filter.specie === 'All' ||
      (filter.specie === 'Human' && character.species === 'Human') ||
      (filter.specie === 'Alien' && character.species === 'Alien');

    const matchesSearchFilter =
      filter.search === '' ||
      character.name?.toLowerCase().includes(filter.search.toLowerCase());

    return matchesCharacterFilter && matchesSpecieFilter && matchesSearchFilter;
  });
}


export const getFilteredStarredCharacters = (state: RootState, filter: Filter & { search: string }): customCharacter[] => {
  return state.characters.characters.filter(character => {
    

    const matchesSpecieFilter =
      filter.specie === 'All' ||
      (filter.specie === 'Human' && character.species === 'Human') ||
      (filter.specie === 'Alien' && character.species === 'Alien');

    const matchesSearchFilter =
      filter.search === '' ||
      character.name?.toLowerCase().includes(filter.search.toLowerCase());

    return character.isStarred && matchesSpecieFilter && matchesSearchFilter;
  })
}

export default charactersSlice.reducer