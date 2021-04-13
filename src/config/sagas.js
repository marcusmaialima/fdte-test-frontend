import { all, takeLatest } from 'redux-saga/effects'
import { requestPokemon } from './store/pokemon/index'

import { requestAPIPokemon } from './saga/pokemon/index'

export function* rootSaga() {
  yield all([takeLatest(requestPokemon, requestAPIPokemon)])
}
