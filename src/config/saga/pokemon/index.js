import { call, put } from 'redux-saga/effects'
import {
  requestSuccessPokemon,
  errorRequestPokemon
} from '../../store/pokemon/index'

import api from '../../api'

export function* requestAPIPokemon(action) {
  try {
    const id = action.payload

    const { data } = yield call(api.get, `pokemon/${id}`)

    const typesPokemon = data.types.map((value) => {
      return value.type.name
    })

    const abilitiesPokemon = data.abilities.map((value) => {
      return value.ability.name
    })

    const statusPokemon = data.stats.map((value) => {
      return value.base_stat
    })

    const payload = {
      pokemon: {
        id: id,
        pictureFront: data.sprites.front_default,
        name: data.name,
        weight: data.weight,
        height: data.height,
        type: typesPokemon,
        abilities: abilitiesPokemon,
        hp: statusPokemon[0],
        attack: statusPokemon[1],
        defense: statusPokemon[2],
        specialAttack: statusPokemon[3],
        specialDefense: statusPokemon[4],
        speed: statusPokemon[5]
      },
      openModal: true
    }

    yield put(requestSuccessPokemon(payload))
  } catch (err) {
    yield put(errorRequestPokemon(err))
  }
}
