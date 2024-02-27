// import logo from "../logo.svg"
// import { Counter } from "../features/menu/Counter"
import { useSSR } from 'react-i18next'
import { Outlet, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  Locale,
  selectLocale,
  Theme,
  setTheme,
  selectTheme,
  installLocale,
} from '@app/reducer/app.slice'

import { RootState } from '@app/store'
import { useTranslation } from 'react-i18next'

import { appConfig } from '@config/app.config'
import { Navbar } from '@components/navbar/Navbar'
import Footer from '@components/layout/Footer'
import { Suspense } from 'react'
import { useLocation, useNavigation, useParams } from 'react-router-dom'

import Log from '../lib/logging/Log'
const log = new Log('routes.Root')

const Root = () => {
  const { locale: currentLocale } = useAppSelector(
    (state: RootState) => state.app
  )
  // const currentLocale = useAppSelector(selectLocale)
  const currentTheme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const { i18n } = useTranslation()
  const location = useLocation()

  const { lang } = useParams()

  useEffect(() => {
    // Defaults
    installLocale(i18n.resolvedLanguage!)

    log.debug('Root que pasa????', 123, 456, 789)
    log.warn('Root que pasa????')
    log.error('Root que pasa????', 123, 456, 789)
    log.info('Root que pasa????')
    log.log('Root que pasa????', 'Probando', { id: 1 })
    log.trace('Root que pasa????', 'Probando', { id: 1 })

    // Check if locale stored. Setting defaults
    // if (!currentLocale) {
    //   console.log(
    //     'root',
    //     `No locale found. Setting default language to i18n: ${i18n.language}`
    //   )
    //   dispatch(setLocale(i18n.language as Locale))
    // }

    // Sync locale with i18n
    // if (i18n.language !== currentLocale) i18n.changeLanguage(currentLocale)
    // Setting HTML lang

    // Theme
    // switch (currentTheme) {
    //   case Theme.Light:
    //     document.documentElement.setAttribute('data-bs-theme', Theme.Light)
    //     break
    //   case Theme.Dark:
    //     document.documentElement.setAttribute('data-bs-theme', Theme.Dark)
    //     break
    //   default:
    //     document.documentElement.setAttribute('data-bs-theme', Theme.System)
    //     if (!document.documentElement.getAttribute('data-bs-theme-mode'))
    //       document.documentElement.setAttribute('data-bs-theme-mode', 'auto')
    //     break
    // }

    // const mql = window.matchMedia('(prefers-color-scheme: dark)')
    // mql.addEventListener('change', (e) => {
    //   const osTheme = e.matches ? Theme.Dark : Theme.Light
    //   console.log('Root', 'System Theme Changed', osTheme)
    //   if (
    //     document.documentElement.getAttribute('data-bs-theme-mode') === 'auto'
    //   ) {
    //     console.log(osTheme)
    //     document.documentElement.setAttribute('data-bs-theme', osTheme)
    //   }
    // })

    console.log('root', 'Route')

    return () => {
      console.log('root', 'useEffect', 'unload')
    }
  }, [])

  const theme = document.documentElement.getAttribute('data-bs-theme')

  const loading = () => {
    console.log('Root', 'loading...')
  }

  return (
    <Suspense fallback="loading">
      {/* <div className="app-root"> */}
      <Navbar title={appConfig.title} subtitle={appConfig.subtitle} />
      <Outlet />
      {/* </div> */}
      <Footer />
    </Suspense>
  )
}

export default Root
