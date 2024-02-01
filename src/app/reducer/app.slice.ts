import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@app/store'
import { PageLayout } from '@/components/layout/PageLayout'
import i18n from 'i18next'

export enum Theme {
  Light = 'light',
  Dark = 'dark',
  Auto = 'auto',
}

export enum Locale {
  EN = 'en',
  ES = 'es',
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
  theme: localStorage.getItem(AppKey.THEME) ?? Theme.Auto,
  locale:
    localStorage.getItem(AppKey.LOCALE) ||
    localStorage.getItem(AppKey.I18N) ||
    'es',
  clockmode: Number(localStorage.getItem(AppKey.CLOCK_MODE)) ?? ClockMode.Short,
} as AppState

const mql = window.matchMedia('(prefers-color-scheme: dark)')
const osTheme = mql.matches ? Theme.Dark : Theme.Light
mql.addEventListener('change', (e) => setOSTheme(e))

const setOSTheme = (e: MediaQueryListEvent) => {
  if (document.documentElement.getAttribute('data-bs-theme-mode') === 'auto') {
    const osTheme = e.matches ? Theme.Dark : Theme.Light
    document.documentElement.setAttribute('data-bs-theme', osTheme)
    console.log('window.matchMedia', 'prefers-color-scheme', osTheme)
  } else {
    console.log('window.matchMedia', 'prefers-color-scheme', 'Nothing to do')
  }
}

const installTheme = (theme?: Theme) => {
  console.log('installTheme!', theme)
  const osTheme = mql.matches ? Theme.Dark : Theme.Light
  document.documentElement.removeAttribute('data-bs-theme-mode')
  switch (theme) {
    case Theme.Light:
      document.documentElement.setAttribute('data-bs-theme', Theme.Light)
      break
    case Theme.Dark:
      document.documentElement.setAttribute('data-bs-theme', Theme.Dark)
      break
    default:
      document.documentElement.setAttribute('data-bs-theme', osTheme)
      document.documentElement.setAttribute('data-bs-theme-mode', 'auto')
      break
  }
}

const installLanguage = () => {}

installTheme(INITIAL_STATE.theme)

console.log('app.slice.ts', 'Executed!')

i18n.on('languageChanged', (newLang) => {
  // if (window.location.pathname === '/') {
  //   console.log('app.slice', 'languageChanged', 'Redirect')
  //   window.location.pathname = '/' + newLang
  // }
})

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
      state.theme = action.payload ?? selectTheme
      localStorage.setItem(AppKey.THEME, String(state.theme))
      installTheme(state.theme)
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload
      localStorage.setItem(AppKey.LOCALE, String(state.locale))
      document.documentElement.setAttribute('lang', action.payload)
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
