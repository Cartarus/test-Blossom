import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Character } from '../../gql/graphql'
import type { RootState } from '../store'

export interface customCharacter extends Character {
  isStarred: boolean
}

// Define a type for the slice state
interface CharacterState {
  characters: customCharacter[]
  filter: {
    character: string
    specie: string
  }
}

// Define the initial state using that type
const initialState: CharacterState = {
  characters: [],
  filter: {
    character: 'All',
    specie: 'All',
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
    },
    unstarCharacter: (state, action: PayloadAction<Character['id']>) => {
      const character = state.characters.find(character => character.id === action.payload)
      if (character) {
        character.isStarred = false
      }
    },
    setFilter: (state, action: PayloadAction<{ character: string, specie: string }>) => {
      state.filter = action.payload
    }
  },
})


export const { loadCharacters, setFilter, starCharacter, unstarCharacter } = charactersSlice.actions

export const getCharacterById = (state: RootState, id: string) => {
  return state.characters.characters.find(character => character.id === id)
}


export default charactersSlice.reducer