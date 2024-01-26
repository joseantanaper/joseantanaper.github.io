import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@app/store'
import { PageLayout } from '@/components/layout/PageLayout'
import { useTranslation } from 'react-i18next'

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Locale {
  EN = 'en-US',
  ES = 'es-ES',
}

export enum ClockMode {
  Short = 0,
  Long = 1,
}

export enum AppKey {
  USERNAME = 'username',
  THEME = 'theme',
  LOCALE = 'locale',
  I18N = 'i18nextLng',
  CLOCK_MODE = 'clockmode',
}

export interface AppState {
  username: string
  theme: Theme
  locale: Locale
  clockmode: ClockMode
}

const INITIAL_STATE = {
  username: localStorage.getItem(AppKey.USERNAME) || '',
  theme: localStorage.getItem(AppKey.THEME) ?? Theme.Light,
  locale:
    localStorage.getItem(AppKey.LOCALE) ?? localStorage.getItem(AppKey.I18N),
  clockmode: Number(localStorage.getItem(AppKey.CLOCK_MODE)) ?? ClockMode.Short,
} as AppState

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
      localStorage.setItem(AppKey.USERNAME, String(state.username))
    },
    clearUsername: (state) => {
      localStorage.removeItem(AppKey.USERNAME)
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      localStorage.setItem(AppKey.THEME, String(state.theme))
      console.log('appSlice', 'setTheme', state.theme)
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload
      localStorage.setItem(AppKey.LOCALE, String(state.locale))
      console.log('appSlice', 'setLocale', state.locale)
    },
    setClockMode: (state, action: PayloadAction<ClockMode>) => {
      state.clockmode = action.payload
      localStorage.setItem(AppKey.CLOCK_MODE, String(state.clockmode))
      console.log('appSlice', 'setClockMode', state.clockmode)
    },
  },
})

export const { setTheme, setLocale, setClockMode, setUsername, clearUsername } =
  appSlice.actions

export const selectUsername = (state: RootState) => state.app.username
export const selectTheme = (state: RootState) => state.app.theme
export const selectLocale = (state: RootState) => state.app.locale
export const selectClockMode = (state: RootState) => state.app.clockmode

export default appSlice.reducer
