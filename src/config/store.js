import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { pokemonReducer } from './ducks/pokemon/index'

const middlewares = []

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

const store = configureStore({
  reducer: { pokemonReducer },
  middleware: middlewares
})

export default store
