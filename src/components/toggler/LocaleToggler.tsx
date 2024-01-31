import React from 'react'

import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button, ButtonSplit } from '@components/widgets/Button'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'

import { useTranslation } from 'react-i18next'
import { Locale, setLocale, selectLocale } from '@app/reducer/app.slice'

export const LocaleToggler = () => {
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector(selectLocale)
  // const [, /*locale*/ applyLocale] = useState(currentLocale)
  const { i18n } = useTranslation()

  const handleClick = (locale?: Locale) => {
    if (!locale) {
      locale =
        !currentLocale || currentLocale === Locale.ES ? Locale.EN : Locale.ES
    }
    dispatch(setLocale(locale))
    i18n.changeLanguage(locale)
    document.documentElement.setAttribute('lang', locale)
  }

  useEffect(() => {
    // document.documentElement.setAttribute('lang', currentLocale)
    // i18n.changeLanguage(currentLocale)
  }, [])

  const dropdownMenu = (
    <>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentLocale === Locale.ES ? 'disabled active' : ''
          }`}
          iconmap={IconMap.Locale}
          iconClass="app-rotate"
          onClick={() => handleClick(Locale.ES)}
          label={Locale.ES}
          labelClass="text-capitalize"
        ></Button>
      </li>
      <li className="nav-item">
        <Button
          className={`dropdown-item ${
            currentLocale === Locale.EN ? 'disabled active' : ''
          }`}
          iconmap={IconMap.Locale}
          iconClass="app-rotate"
          onClick={() => handleClick(Locale.EN)}
          label={Locale.EN}
          labelClass="text-capitalize"
        ></Button>
      </li>
    </>
  )

  return (
    <ButtonSplit
      className={`btn-outline-secondary`}
      onClick={() => handleClick()}
      iconmap={IconMap.Locale}
      label={'*** ' + (currentLocale && currentLocale!.substring(0, 2))}
      labelClass="text-uppercase"
      dropdown={dropdownMenu}
    ></ButtonSplit>
  )
}
