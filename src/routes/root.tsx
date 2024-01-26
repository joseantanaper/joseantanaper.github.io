// import logo from "../logo.svg"
// import { Counter } from "../features/menu/Counter"
import { Outlet, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { Locale, setLocale, selectLocale } from '@/app/reducer/app.slice'
import { useTranslation } from 'react-i18next'

import { appConfig } from '@config/app.config'
import { Navbar } from '@components/navbar/Navbar'

const Root = () => {
  const currentLocale = useAppSelector(selectLocale)
  const dispatch = useAppDispatch()
  const { i18n } = useTranslation()
  useEffect(() => {
    // Check if locale stored. Setting defaults
    if (!currentLocale) {
      console.log(
        'root',
        `No locale found. Setting default language to i18n: ${i18n.language}`
      )
      dispatch(setLocale(i18n.language as Locale))
    }
    // Sync locale with i18n
    if (i18n.language !== currentLocale) i18n.changeLanguage(currentLocale)
    // Setting HTML lang
    document.documentElement.setAttribute('lang', currentLocale)

    console.log('root', 'Route')

    return () => {
      console.log('root', 'useEffect', 'unload')
    }
  }, [])

  return (
    <>
      {/* <div className="app-root"> */}
      <Navbar title={appConfig.title} subtitle={appConfig.subtitle} />
      <Outlet />
      {/* </div> */}
    </>
  )
}

export default Root
