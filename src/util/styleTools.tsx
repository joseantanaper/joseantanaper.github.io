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

// export const dividerClass = 'ps-1 ms-1 ps-sm-2 ms-sm-2 ps-lg-3 ms-lg-3'

export const dividerClass =
  'ps-0 ms-0 ps-sm-1 ms-sm-1 ps-md-2 ms-md-2 ps-lg-3 ms-lg-3'
