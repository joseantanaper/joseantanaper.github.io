import React from 'react'

import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button, ButtonSplitPlus } from '@components/widgets/Button'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useResolvedPath } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/hooks'

import { useTranslation } from 'react-i18next'
import {
  Locale,
  setLocale,
  selectLocale,
  selectTheme,
  selectBtnTheme,
} from '@app/reducer/app.slice'

import { buttonStyle } from '@/util/styleTools'

export const LocaleToggler = () => {
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector(selectLocale)
  const currentTheme = useAppSelector(selectTheme)
  const currentBtnTheme = useAppSelector(selectBtnTheme)
  const navigate = useNavigate()
  const location = useLocation()
  const resolvedPath = useResolvedPath(location)
  // const [, /*locale*/ applyLocale] = useState(currentLocale)
  const { t, i18n } = useTranslation()

  const handleClick = (locale?: Locale) => {
    if (!locale) {
      locale =
        !currentLocale || currentLocale === Locale.ES ? Locale.EN : Locale.ES
    }

    dispatch(setLocale(locale))
    i18n.changeLanguage(locale)

    navigate(
      '/' + locale + location.pathname.substring(3, location.pathname.length),
      {
        replace: true,
      }
    )
    document.documentElement.setAttribute('lang', locale)
  }

  useEffect(() => {
    // document.documentElement.setAttribute('lang', currentLocale)
    // i18n.changeLanguage(currentLocale)
  }, [])

  const dropdownMenu = (
    <>
      <li>
        <h6 className="bg-gradient dropdown-header">{t('app:language')}</h6>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentLocale === Locale.ES ? 'disabled active' : ''
          }`}
          iconmap={IconMap.Locale}
          onClick={() => handleClick(Locale.ES)}
          label="app:es"
          labelClass="text-capitalize"
        ></Button>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentLocale === Locale.EN ? 'disabled active' : ''
          }`}
          iconmap={IconMap.Locale}
          onClick={() => handleClick(Locale.EN)}
          label="app:en"
          labelClass="text-capitalize"
        ></Button>
      </li>
    </>
  )

  return (
    <ButtonSplitPlus
      className={buttonStyle(
        currentTheme,
        currentBtnTheme,
        'danger',
        'primary',
        'warning'
      )}
      onClick={handleClick}
      iconmap={IconMap.Locale}
      label={currentLocale && currentLocale!.substring(0, 2)}
      labelClass="text-uppercase"
      dropdown={dropdownMenu}
    >
      <Button
        className={buttonStyle(
          currentTheme,
          currentBtnTheme,
          'danger',
          'primary',
          'warning'
        )}
        onClick={() => handleClick()}
        iconmap={IconMap.Locale}
        label={currentLocale}
        labelClass="text-uppercase"
      />
    </ButtonSplitPlus>
  )
}
