import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '../widgets/Icon'
import { Button } from '../widgets/Button'
import { Subnavbar } from '../navbar/Subnavbar'
import { Trans } from 'react-i18next'
import { useLoaderData } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'

export interface LoaderData {
  title?: string
  subtitle?: string
  description?: string
  subnavbar?: boolean
  toolbar?: ReactNode
  iconmap?: IconMap
}

interface Props {
  subnavbar?: boolean
  toolbar?: ReactNode
  children: ReactNode
}

export const PageLayout = ({ subnavbar = false, toolbar, children }: Props) => {
  console.log('PageLayout', 'constructor')

  const loader = (useLoaderData() ?? {}) as LoaderData

  const { title, subtitle, description, iconmap } = loader

  const { t } = useTranslation()

  useEffect(() => {
    console.log('PageLayout', 'useEffect[]')

    const showTitle = () => {
      if (window.scrollY > 100) {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          // span.classList.remove('hide')
          // span.classList.add('show')
          span.classList.replace('hide', 'show')
        })
        document.querySelectorAll('button.app-go-top').forEach((button) => {
          button.classList.replace('hide', 'show')
        })
        // document.querySelectorAll('button.app-go-top').forEach((button) => {
        //   button.classList.replace('hide', 'show')
        //   // if (!button.classList.contains('show')) button.classList.add('show')
        //   button.removeAttribute('disabled')
        // })
      } else {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          // span.classList.remove('show')
          // span.classList.add('hide')
          span.classList.replace('show', 'hide')
        })
        document.querySelectorAll('button.app-go-top').forEach((button) => {
          button.classList.replace('show', 'hide')
        })
        // document.querySelectorAll('button.app-go-top').forEach((button) => {
        //   button.classList.replace('show', 'hide')
        //   // if (button.classList.contains('show')) button.classList.remove('show')
        //   button.setAttribute('disabled', 'disabled')
        // })
      }
    }

    let isScrolling
    window.addEventListener(
      'scroll',
      () => {
        showTitle()
      },
      false
    )

    showTitle()
    goTop(true)

    return () => {
      console.log('PageLayout', 'useEffect', 'unload')
    }
  }, [])

  const goTop = (instant: boolean = false) => {
    console.log('PageLayout', 'goTop')
    if (instant) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } else {
      document.body.scrollTop = 0
    }
    document.documentElement.scrollTop = 0
  }

  return (
    <div id="app-pageLayout" className="app-pageLayout">
      <div className="container-fluid mb-4 text-truncate">
        <div className="row">
          <div className="col">
            <h1 className="app-layout-title text-center text-wrap">
              {iconmap && <Icon iconmap={iconmap} />}
              {title ? <span>{t(title)}</span> : null}
              {subtitle ? (
                <span className="opacity-25 ms-3 fst-italic">
                  {t(subtitle)}
                </span>
              ) : null}
            </h1>
          </div>
        </div>
      </div>

      {description && (
        <div className="app-header mb-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center text-body-secondary">
                <Trans>{description}</Trans>
              </div>
            </div>
          </div>
        </div>
      )}

      {subnavbar && (
        <Subnavbar
          title={loader.title}
          subtitle={loader.subtitle}
          toolbar={toolbar}
          iconmap={loader.iconmap}
        />
      )}

      <div className="app-content">{children}</div>

      <Button
        className="navbar-toggler app-go-top"
        extraClass="position-fixed end-0 bottom-0 me-5 mb-5 hide fade z-3"
        iconmap={IconMap.GoTop}
        onClick={goTop}
      />

      <Footer />
    </div>
  )
}
