import { createAction, createReducer } from '@reduxjs/toolkit'

const addPokemon = createAction('pokemon/ADD_POKEMON')
const removePokemon = createAction('pokemon/REMOVE_POKEMON')
const listPokemon = createAction('pokemon/LIST_POKEMON')
const updatePokemon = createAction('pokemon/UPDATE_POKEMON')
const openCloseModal = createAction('pokemon/OPEN_CLOSE_MODAL')
const requestPokemon = createAction('pokemon/REQUEST_POKEMON')
const requestSuccessPokemon = createAction('pokemon/REQUEST_SUCCESS_POKEMON')
const errorRequestPokemon = createAction('pokemon/FAIL_POKEMON')

const pokemonInitialState = {
  pokemon: [],
  capturePokemon: [],
  error: false,
  msgError: '',
  openModal: false,
  loading: false
}

export const pokedex = createReducer(pokemonInitialState, (builder) => {
  builder
    .addCase(addPokemon, (state, action) => {
      return {
        ...state,
        pokemon: [],
        capturePokemon: [...state.capturePokemon, { ...action.payload }]
      }
    })
    .addCase(removePokemon, (state, action) => {
      const idPokemonSelected = action.payload

      return {
        ...state,
        pokemon: state.pokemon.filter(
          (pokemon) => pokemon.id !== idPokemonSelected
        )
      }
    })
    .addCase(listPokemon, (state) => {
      return {
        ...state
      }
    })
    .addCase(updatePokemon, (state, action) => {
      const pokemonSelected = action.payload.pokemon
      const findIndexPokemon = state.pokemon.findIndex(
        (pokemon) => pokemon.id === pokemonSelected.id
      )
      const updatePoke = state.pokemon.map((poke) => {
        poke[findIndexPokemon] = pokemonSelected
      })

      return {
        ...state,
        pokemon: [...state.pokemon, ...updatePoke]
      }
    })
    .addCase(openCloseModal, (state) => {
      return { ...state, openModal: state.openModal === true ? false : true }
    })
    .addCase(requestPokemon, (state) => {
      return { ...state, loading: !state.loading }
    })
    .addCase(requestSuccessPokemon, (state, action) => {
      return {
        ...state,
        pokemon: [...state.pokemon, { ...action.payload.pokemon }],
        openModal: action.payload.openModal,
        loading: !state.loading
      }
    })
    .addCase(errorRequestPokemon, (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
        msgError: action.payload
      }
    })
    .addDefaultCase((state) => {
      return {
        ...state
      }
    })
})

export {
  addPokemon,
  removePokemon,
  listPokemon,
  updatePokemon,
  errorRequestPokemon,
  requestPokemon,
  requestSuccessPokemon,
  openCloseModal
}
