import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@app/store'
import appReducer, {
  AppState,
  AppKey,
  Theme,
  BtnTheme,
  Locale,
  ClockMode,
  setTheme,
  setBtnTheme,
} from '@app/reducer/app.slice'

const INITIAL_TEST_STATE = {
  username: '',
  theme: Theme.Auto,
  btntheme: BtnTheme.Outline,
  locale: Locale.ES,
  clockmode: ClockMode.Short,
} as AppState

describe('App reducer', () => {
  it('welcome', () => {
    expect(0).toBe(0)
  })
  it('should handle initial state', () => {
    expect(appReducer(undefined, { type: 'unknown' })).toEqual(
      INITIAL_TEST_STATE
    )
  })
  it('should set theme to Light', () => {
    expect(appReducer(undefined, setTheme(Theme.Light)).theme).toEqual(
      Theme.Light
    )
  })
  it('should set theme to Dark', () => {
    expect(appReducer(undefined, setTheme(Theme.Dark)).theme).toEqual(
      Theme.Dark
    )
  })
  it('should set theme to Auto', () => {
    expect(appReducer(undefined, setTheme(Theme.Auto)).theme).toEqual(
      Theme.Auto
    )
  })
  it('should set btntheme to Solid', () => {
    expect(appReducer(undefined, setBtnTheme(BtnTheme.Solid)).btntheme).toEqual(
      BtnTheme.Solid
    )
  })
  it('should set btntheme to Outline', () => {
    expect(
      appReducer(undefined, setBtnTheme(BtnTheme.Outline)).btntheme
    ).toEqual(BtnTheme.Outline)
  })
})
