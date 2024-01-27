import React from 'react'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button } from '@components/widgets/Button'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'

import { useTranslation } from 'react-i18next'
import { Locale, setLocale, selectLocale } from '@app/reducer/app.slice'

export const LocaleToggler = () => {
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector(selectLocale)
  // const [, /*locale*/ applyLocale] = useState(currentLocale)
  const { i18n } = useTranslation()

  const clickLocale = (locale: Locale) => {
    dispatch(setLocale(locale))
    i18n.changeLanguage(locale)
    document.documentElement.setAttribute('lang', locale)
  }

  useEffect(() => {
    // document.documentElement.setAttribute('lang', currentLocale)
    // i18n.changeLanguage(currentLocale)
  }, [])

  return (
    <div className="btn-group">
      <Button
        className={`btn text-uppercase  ${
          currentLocale === Locale.EN ? 'active disabled' : ''
        }`}
        iconmap={IconMap.Locale}
        onClick={() => clickLocale(Locale.EN)}
        label={Locale.EN.substring(0, 2)}
      />
      <Button
        className={`btn text-uppercase  ${
          currentLocale === Locale.ES ? 'active disabled' : ''
        }`}
        iconmap={IconMap.Locale}
        onClick={() => clickLocale(Locale.ES)}
        label={Locale.ES.substring(0, 2)}
      />
    </div>
  )
}
