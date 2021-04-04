import { call } from 'redux-saga/effects'
// import {
//   addPokemon,
//   removePokemon,
//   listPokemon,
//   updatePokemon,
//   errorRequestPokemon
// } from './index'

import api from '../../api'

export function* requestAPIPokemon(action) {
  try {
    console.log(action, 'action')

    const id = action.payload

    const dataPokemon = yield call(api.get, `pokemon/${id}`)

    console.log(dataPokemon, 'dataPokemon')
  } catch (err) {
    console.log(err)
  }
}
