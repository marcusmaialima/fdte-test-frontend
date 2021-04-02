import { configureStore } from '@reduxjs/toolkit'

const middlewares = []

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

const store = configureStore({
  reducer: {},
  middleware: middlewares
})

export default store
