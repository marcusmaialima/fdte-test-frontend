import { createAction, createReducer } from '@reduxjs/toolkit'

const addPokemon = createAction('pokemon/ADD_POKEMON')
const removePokemon = createAction('pokemon/REMOVE_POKEMON')
const listPokemon = createAction('pokemon/LIST_POKEMON')
const updatePokemon = createAction('pokemon/UPDATE_POKEMON')

const pokemonInitialState = {
  pokemon: [
    {
      id: 0,
      pictureFront: '',
      name: '',
      hp: 0,
      weight: 0,
      height: 0,
      type: [],
      abilities: [],
      defense: 0,
      attack: 0,
      specialDefense: 0,
      specialAttack: 0,
      speed: 0
    }
  ],
  error: false,
  msgError: ''
}

export const pokemonReducer = createReducer(pokemonInitialState, (builder) => {
  builder
    .addCase(addPokemon, (state, action) => {
      const quantityPokemon = state.pokemon.length

      if (quantityPokemon > 6) {
        state.error = true
        state.msgError = 'Não é possível obter mais do que 6 pokémon'
      } else {
        state.pokemon.push(...action.payload.pokemon)
      }
    })
    .addCase(removePokemon, (state, action) => {
      const idPokemonSelected = action.payload.pokemon.id

      state.pokemon.filter((pokemon) => pokemon.id !== idPokemonSelected)
    })
    .addCase(listPokemon, (state) => {
      state.pokemon
    })
    .addCase(updatePokemon, (state, action) => {
      const pokemonSelected = action.payload.pokemon
      const findIndexPokemon = state.pokemon.findIndex(
        (pokemon) => pokemon.id === pokemonSelected.id
      )
      state.pokemon[findIndexPokemon] = pokemonSelected
    })
    .addDefaultCase((state) => {
      return state
    })
})
