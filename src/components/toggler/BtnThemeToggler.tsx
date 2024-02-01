import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button, ButtonSplit } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  Theme,
  BtnTheme,
  setBtnTheme,
  selectTheme,
  selectBtnTheme,
} from '@app/reducer/app.slice'
import { Trans } from 'react-i18next'
import { buttonStyle } from '@/util/styleTools'

interface Props {}

export const BtnThemeToggler = () => {
  useEffect(() => {})

  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectTheme)
  const currentBtnTheme = useAppSelector(selectBtnTheme)

  const handleClick = (btntheme?: BtnTheme) => {
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
          <Trans>app:btntheme</Trans>
        </h6>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentBtnTheme === BtnTheme.Outline ? 'disabled active' : ''
          }`}
          iconmap={IconMap.BtnThemeOutline}
          iconClass="app-rotate"
          onClick={() => handleClick(BtnTheme.Outline)}
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
          iconClass="app-rotate"
          onClick={() => handleClick(BtnTheme.Solid)}
          label="Solid"
          labelClass="text-capitalize"
        ></Button>
      </li>
    </>
  )

  return (
    <>
      <div className="">
        <ButtonSplit
          className={buttonStyle(
            currentTheme,
            currentBtnTheme,
            'primary',
            'danger',
            'primary'
          )}
          onClick={() => handleClick()}
          iconmap={
            currentBtnTheme === BtnTheme.Outline
              ? IconMap.BtnThemeOutline
              : IconMap.BtnThemeSolid
          }
          label={currentBtnTheme === 0 ? 'Outline' : 'Solid'}
          labelClass="text-capitalize d-none d-sm-inline"
          dropdown={dropdownMenu}
          dropdownBreakdown="sm"
        ></ButtonSplit>
      </div>
    </>
  )
}
