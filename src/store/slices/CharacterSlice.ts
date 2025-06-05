import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Character } from '../../gql/graphql'
import type { RootState } from '../store'

export type Filter = {
  character: 'All' | 'Starred' | 'Others'
  specie: 'All' | 'Human' | 'Alien'
  sort: 'none' | 'A-Z' | 'Z-A'
}

export type Comment = {
  comment: string
  createdAt: string
}

export interface customCharacter extends Character {
  isDeleted: boolean
  isStarred: boolean
  comments: Comment[]
}

// Define a type for the slice state
interface CharacterState {
  characters: customCharacter[]
  filter: Filter & { search: string }
  isOpen: boolean
}

// Define the initial state using that type
const initialState: CharacterState = {
  characters: [],
  filter: {
    character: 'All',
    specie: 'All',
    sort: 'none',
    search: ''
  },
  isOpen: true
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    loadCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload.map(character => ({ ...character, isStarred: false, comments: [], isDeleted: false }))
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
        character.comments.push({ comment: action.payload.comment, createdAt: new Date().toISOString() })
      }
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    deleteCharacter: (state, action: PayloadAction<string>) => {
      const character = state.characters.find(character => character.id === action.payload)
      if (character) {
        character.isDeleted = true
      }
      state.characters = state.characters.map(character => character.id === action.payload ? { ...character, isDeleted: true } : character)
    }
  },
})


export const { loadCharacters, setFilter, starCharacter, unstarCharacter, setSearch, addComment, setIsOpen, deleteCharacter } = charactersSlice.actions

export const getCharacterById = (state: RootState, id: string) => {
  return state.characters.characters.find(character => character.id === id)
}

export const getFilteredCharacters = (state: RootState, filter: Filter & { search: string }): customCharacter[] => {
  const characters = state.characters.characters.filter(character => {
    
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

    return matchesCharacterFilter && matchesSpecieFilter && matchesSearchFilter && !character.isDeleted;
  });

  if (filter.sort === 'A-Z') {
    return characters.sort((a, b) => a.name?.localeCompare(b.name ?? '') ?? 0);
  } else if (filter.sort === 'Z-A') {
    return characters.sort((a, b) => b.name?.localeCompare(a.name ?? '') ?? 0);
  }

  return characters;
}


export const getFilteredStarredCharacters = (state: RootState, filter: Filter & { search: string }): customCharacter[] => {
  const characters = state.characters.characters.filter(character => {
    

    const matchesSpecieFilter =
      filter.specie === 'All' ||
      (filter.specie === 'Human' && character.species === 'Human') ||
      (filter.specie === 'Alien' && character.species === 'Alien');

    const matchesSearchFilter =
      filter.search === '' ||
      character.name?.toLowerCase().includes(filter.search.toLowerCase());

    return character.isStarred && matchesSpecieFilter && matchesSearchFilter && !character.isDeleted;
  })

  if (filter.sort === 'A-Z') {
    return characters.sort((a, b) => a.name?.localeCompare(b.name ?? '') ?? 0);
  } else if (filter.sort === 'Z-A') {
    return characters.sort((a, b) => b.name?.localeCompare(a.name ?? '') ?? 0);
  } 

  return characters;
}

export default charactersSlice.reducer