import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Character } from '../../gql/graphql'
import type { RootState } from '../store'

// Define a type for the slice state
interface CharacterState {
  characters: Character[]
  starredCharacters: Character[]
  
}

// Define the initial state using that type
const initialState: CharacterState = {
  characters: [],
  starredCharacters: []
}

export const charactersSlice = createSlice({
  name: 'characters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload
    },
    starCharacter: (state, action: PayloadAction<Character['id']>) => {
      const character = state.characters.find(character => character.id === action.payload)
      if (character) {
        state.starredCharacters.push(character)
        state.characters = state.characters.filter(character => character.id !== action.payload)
      }
    },
    unstarCharacter: (state, action: PayloadAction<Character['id']>) => {
      const character = state.starredCharacters.find(character => character.id === action.payload)
      if (character) {
        state.characters.push(character)
        state.starredCharacters = state.starredCharacters.filter(character => character.id !== action.payload)
      }
    }
  },
})


export const { loadCharacters, starCharacter, unstarCharacter, } = charactersSlice.actions

export const getCharacterById = (state: RootState, id: string) => {
  return state.characters.characters.find(character => character.id === id) || state.characters.starredCharacters.find(character => character.id === id)
}


export default charactersSlice.reducer