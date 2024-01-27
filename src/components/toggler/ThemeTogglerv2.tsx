import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
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

  return (
    <>
      <div className="d-none d-sm-inline">
        <div className="btn-group">
          <button
            type="button"
            className={`btn ${buttonStyle}`}
            onClick={() => handleClick()}
          >
            {theme === Theme.Light && (
              <Icon iconmap={IconMap.ThemeLight} extra="app-rotate" />
            )}
            {theme === Theme.Dark && (
              <Icon iconmap={IconMap.ThemeDark} extra="app-rotate" />
            )}
            {theme === Theme.Auto && (
              <Icon iconmap={IconMap.ThemeAuto} extra="app-rotate" />
            )}

            {/* <span className="d-none d-lg-inline">Theme</span> */}
            {theme === Theme.Light && (
              <span className="d-none d-lg-inline text-capitalize">
                {Theme.Light}
              </span>
            )}
            {theme === Theme.Dark && (
              <span className="d-none d-lg-inline text-capitalize">
                {Theme.Dark}
              </span>
            )}
            {theme === Theme.Auto && (
              <span className="d-none d-lg-inline text-capitalize">
                {Theme.Auto}
              </span>
            )}
          </button>
          {/* For solid background */}
          {/* <div className="vr bg-transparent"></div> */}
          <button
            type="button"
            className={`btn ${buttonStyle} dropdown-toggle dropdown-toggle-split`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>

          <ul role="menu" className="dropdown-menu shadow">
            <li>
              <button
                className={`dropdown-item ${
                  currentTheme === Theme.Light ? 'disabled active' : ''
                }`}
                onClick={() => handleClick(Theme.Light)}
              >
                <Icon iconmap={IconMap.ThemeLight} extra="app-rotate" />
                <span className="text-capitalize">{Theme.Light}</span>
              </button>
            </li>
            <li>
              <button
                className={`dropdown-item ${
                  currentTheme === Theme.Dark ? 'disabled active' : ''
                }`}
                onClick={() => handleClick(Theme.Dark)}
              >
                <Icon iconmap={IconMap.ThemeDark} extra="app-rotate" />
                <span className="text-capitalize">{Theme.Dark}</span>
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button
                className={`dropdown-item ${
                  currentTheme === Theme.Auto ? 'disabled active' : ''
                }`}
                onClick={() => handleClick(Theme.Auto)}
              >
                <Icon iconmap={IconMap.ThemeAuto} extra="app-rotate" />
                <span className="text-capitalize">{Theme.Auto}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-inline d-sm-none">
        <button
          type="button"
          className={`btn ${buttonStyle}`}
          onClick={() => handleClick()}
        >
          {theme === Theme.Light && (
            <Icon iconmap={IconMap.ThemeLight} extra="app-rotate" />
          )}
          {theme === Theme.Dark && (
            <Icon iconmap={IconMap.ThemeDark} extra="app-rotate" />
          )}
          {theme === Theme.Auto && (
            <Icon iconmap={IconMap.ThemeAuto} extra="app-rotate" />
          )}

          {/* <span className="d-none d-lg-inline">Theme</span> */}
          {theme === Theme.Light && (
            <span className="d-none d-lg-inline text-capitalize">
              {Theme.Light}
            </span>
          )}
          {theme === Theme.Dark && (
            <span className="d-none d-lg-inline text-capitalize">
              {Theme.Dark}
            </span>
          )}
          {theme === Theme.Auto && (
            <span className="d-none d-lg-inline text-capitalize">
              {Theme.Auto}
            </span>
          )}
        </button>
      </div>
    </>
  )
}
