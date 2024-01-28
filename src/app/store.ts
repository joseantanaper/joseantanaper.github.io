import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { logger } from '@app/middleware'

import todosReducer from '@app/reducer/todos.slice'
import counterReducer from '@app/reducer/counter.slice'
import appReducer from '@app/reducer/app.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
