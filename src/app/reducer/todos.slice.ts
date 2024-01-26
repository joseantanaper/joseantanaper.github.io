import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@app/store'

export interface TodosState {
  todos: Array<string>
}

const name = 'todos'

const initialState: TodosState = {
  todos: JSON.parse(localStorage.getItem(name)!) || [],
}

export const todosSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log('todos.slice', 'addTodo', action.payload)
      localStorage.setItem(
        name,
        JSON.stringify([...state.todos, action.payload])
      )
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    },
    removeAll: () => {
      localStorage.setItem(name, JSON.stringify([]))
      return {
        todos: [],
      }
    },
    remove: (state, action) => {
      localStorage.setItem(
        name,
        JSON.stringify(
          [...state.todos].filter((todo) => todo !== action.payload)
        )
      )
      return {
        todos: [...state.todos].filter((todo) => todo !== action.payload),
      }
    },
  },
})

export const { addTodo, removeAll, remove } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer
