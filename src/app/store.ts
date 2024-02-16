import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { logger, crashReporter } from '@/app/middleware/middleware'

import todosReducer from '@app/reducer/todos.slice'
import counterReducer from '@app/reducer/counter.slice'
import appReducer from '@app/reducer/app.slice'

export const rootStore = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Conditional Middlewgare (DEV/PROD)
    import.meta.env.DEV
      ? getDefaultMiddleware().concat(logger).concat(crashReporter)
      : getDefaultMiddleware().concat(logger),
})

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  app: appReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

// export type RootState = ReturnType<typeof agppStore.getState>
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof rootStore.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
