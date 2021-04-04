import { all, takeLatest } from 'redux-saga/effects'
import { requestPokemon } from './ducks/pokemon'

import { requestAPIPokemon } from './ducks/pokemon/saga'

export function* rootSaga() {
  yield all([takeLatest(requestPokemon, requestAPIPokemon)])
}
