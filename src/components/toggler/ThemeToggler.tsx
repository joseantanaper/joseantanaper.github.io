import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button, ButtonSplit } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { Theme, setTheme } from '@app/reducer/app.slice'
import { RootState } from '@app/store'

export const enum TogglerType {
  Button = 0,
  ButtonSelector = 1,
  Selector = 2,
}

export const enum Label {
  No = 0,
  Yes = 1,
}

interface Props {
  currentTheme?: Theme
  togglerType?: TogglerType
  label?: Label
}

export const ThemeToggler = ({
  currentTheme,
  togglerType = TogglerType.Button,
  label = Label.No,
}: Props) => {
  const buttonStyle = 'btn-outline-secondary'
  useEffect(() => {})

  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((state: RootState) => state.app)

  const handleClick = (theme?: Theme) => {
    switch (theme) {
      case Theme.Light:
        document.documentElement.setAttribute('data-bs-theme', Theme.Light)
        document.documentElement.removeAttribute('data-bs-theme-mode')
        dispatch(setTheme(Theme.Light))
        break
      case Theme.Dark:
        document.documentElement.setAttribute('data-bs-theme', Theme.Dark)
        document.documentElement.removeAttribute('data-bs-theme-mode')
        dispatch(setTheme(Theme.Dark))
        break
      case Theme.Auto:
        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        const osTheme = mql.matches ? Theme.Dark : Theme.Light
        dispatch(setTheme(Theme.Auto))
        break
      default:
        if (
          document.documentElement.getAttribute('data-bs-theme-mode') ===
          Theme.Auto
        ) {
          dispatch(setTheme(Theme.Light))
        } else {
          switch (document.documentElement.getAttribute('data-bs-theme')) {
            case Theme.Light:
              dispatch(setTheme(Theme.Dark))
              break
            case Theme.Dark:
              dispatch(setTheme(Theme.Auto))
              break
          }
        }
    }
  }

  const dropdownMenu = (
    <>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentTheme === Theme.Light ? 'disabled active' : ''
          }`}
          iconmap={IconMap.ThemeLight}
          iconClass="app-rotate"
          onClick={() => handleClick(Theme.Light)}
          label={Theme.Light}
          labelClass="text-capitalize"
        ></Button>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentTheme === Theme.Dark ? 'disabled active' : ''
          }`}
          iconmap={IconMap.ThemeDark}
          iconClass="app-rotate"
          onClick={() => handleClick(Theme.Dark)}
          label={Theme.Dark}
          labelClass="text-capitalize"
        ></Button>
      </li>
      <li className="nav-item">
        <hr className="dropdown-divider" />
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentTheme === Theme.Auto ? 'disabled active' : ''
          }`}
          iconmap={IconMap.ThemeAuto}
          iconClass="app-rotate"
          onClick={() => handleClick(Theme.Auto)}
          label={Theme.Auto}
          labelClass="text-capitalize"
        ></Button>
      </li>
    </>
  )

  return (
    <>
      <div className="">
        <ButtonSplit
          className={`btn-outline-secondary`}
          onClick={() => handleClick()}
          iconmap={
            theme === Theme.Light
              ? IconMap.ThemeLight
              : theme === Theme.Dark
              ? IconMap.ThemeDark
              : IconMap.ThemeAuto
          }
          label={theme}
          labelClass="text-capitalize d-none d-sm-inline"
          dropdown={dropdownMenu}
          dropdownBreakdown="sm"
        ></ButtonSplit>
      </div>
    </>
  )
}
