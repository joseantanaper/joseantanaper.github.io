import { Theme, BtnTheme } from '@app/reducer/app.slice'

export const buttonStyle = (
  currentTheme: Theme,
  currentBtnTheme: BtnTheme,
  light: string,
  dark?: string,
  auto?: string
) => {
  // if (!light) return 'btn-secondary'
  switch (currentTheme) {
    case Theme.Light:
      return currentBtnTheme === BtnTheme.Outline
        ? `btn-outline-${light}`
        : `btn-${light}`
    case Theme.Dark:
      return currentBtnTheme === BtnTheme.Outline
        ? `btn-outline-${dark ?? light}`
        : `btn-${dark ?? light}`
    case Theme.Auto:
      return currentBtnTheme === BtnTheme.Outline
        ? `btn-outline-${auto ?? dark ?? light}`
        : `btn-${auto ?? dark ?? light}`
    default:
      return currentBtnTheme === BtnTheme.Outline
        ? 'btn-outline-secondary'
        : 'btn-secondary'
  }
}
