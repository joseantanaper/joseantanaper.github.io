import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import {
  Button,
  ButtonSplit,
  ButtonSplitPlus,
} from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  Theme,
  setTheme,
  BtnTheme,
  setBtnTheme,
  selectTheme,
  selectBtnTheme,
} from '@app/reducer/app.slice'
import { Trans } from 'react-i18next'
import { buttonStyle } from '@/util/styleTools'

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
  useEffect(() => {})

  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)
  const currentBtnTheme = useAppSelector(selectBtnTheme)

  const btnClass = buttonStyle(theme, currentBtnTheme, 'primary')
  // const btnClass = ''

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

  const handleBtnThemeClick = (btntheme?: BtnTheme) => {
    switch (btntheme) {
      case BtnTheme.Outline:
        dispatch(setBtnTheme(BtnTheme.Outline))
        break
      case BtnTheme.Solid:
        dispatch(setBtnTheme(BtnTheme.Solid))
        break
      default:
        dispatch(
          setBtnTheme(
            currentBtnTheme === BtnTheme.Outline
              ? BtnTheme.Solid
              : BtnTheme.Outline
          )
        )
    }
  }

  const dropdownMenu = (
    <>
      <li>
        <h6 className="bg-gradient dropdown-header">
          <Trans>app:theme</Trans>
        </h6>
      </li>
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
      <li className="nav-item">
        <hr className="dropdown-divider" />
      </li>
      <li>
        <h6 className="bg-gradient dropdown-header">
          <Trans>app:btntheme</Trans>
        </h6>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentBtnTheme === BtnTheme.Outline ? 'disabled active' : ''
          }`}
          iconmap={IconMap.BtnThemeOutline}
          onClick={() => handleBtnThemeClick(BtnTheme.Outline)}
          label="Outline"
          labelClass="text-capitalize"
        ></Button>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentBtnTheme === BtnTheme.Solid ? 'disabled active' : ''
          }`}
          iconmap={IconMap.BtnThemeSolid}
          onClick={() => handleBtnThemeClick(BtnTheme.Solid)}
          label="Solid"
          labelClass="text-capitalize"
        ></Button>
      </li>
    </>
  )

  return (
    <>
      <div className="">
        <ButtonSplitPlus
          className={`app-w-md ${btnClass}`}
          dropdown={dropdownMenu}
        >
          <Button
            className={`${btnClass}`}
            extraClass="app-w-md"
            iconmap={
              theme === Theme.Light
                ? IconMap.ThemeLight
                : theme === Theme.Dark
                ? IconMap.ThemeDark
                : IconMap.ThemeAuto
            }
            iconClass="app-rotate"
            label={theme}
            labelClass="text-capitalize d-none d-md-inline"
            onClick={() => handleClick()}
          />
          <Button
            className={`${btnClass}`}
            extraClass="app-w-md"
            iconmap={
              currentBtnTheme === BtnTheme.Outline
                ? IconMap.BtnThemeOutline
                : IconMap.BtnThemeSolid
            }
            label={`${currentBtnTheme === 0 ? 'Outline' : 'Solid'}`}
            labelClass="text-capitalize d-none d-md-inline"
            onClick={() => handleBtnThemeClick()}
            // dropdownBreakdown="sm"
          />
        </ButtonSplitPlus>
      </div>
    </>
  )
}
