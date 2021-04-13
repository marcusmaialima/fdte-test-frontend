import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { pokedex } from './store/pokemon/index'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

middlewares.push(sagaMiddleware)

const store = configureStore({
  reducer: { pokedex },
  middleware: middlewares
})

sagaMiddleware.run(rootSaga)

export default store
