import { Theme, BtnTheme } from '@app/reducer/app.slice'

export const buttonStyle = (
  currentTheme: Theme,
  currentBtnTheme: BtnTheme,
  light: string,
  dark: string,
  auto: string
) => {
  switch (currentTheme) {
    case Theme.Light:
      return currentBtnTheme === BtnTheme.Outline
        ? `btn-outline-${light}`
        : `btn-${light}`
    case Theme.Dark:
      return currentBtnTheme === BtnTheme.Outline
        ? `btn-outline-${dark}`
        : `btn-${dark}`
    case Theme.Auto:
      return currentBtnTheme === BtnTheme.Outline
        ? `btn-outline-${auto}`
        : `btn-${auto}`
    default:
      return currentBtnTheme === BtnTheme.Outline
        ? 'btn-outline-secondary'
        : 'btn-secondary'
  }
}
