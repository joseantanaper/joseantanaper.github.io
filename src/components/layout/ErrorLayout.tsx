import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '../widgets/Icon'
import { Button } from '../widgets/Button'
import { Subnavbar } from '../navbar/Subnavbar'
import { Trans } from 'react-i18next'
import { useLoaderData } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'

interface Props {
  subnavbar?: boolean
  toolbar?: ReactNode
  children: ReactNode
}

export const ErrorLayout = ({
  subnavbar = false,
  toolbar,
  children,
}: Props) => {
  const { t } = useTranslation()

  useEffect(() => {
    console.log('ErrorLayout', 'useEffect')

    return () => {
      console.log('PageLayout', 'useEffect', 'unload')
    }
  }, [])

  return (
    <div id="app-pageLayout" className="app-pageLayout">
      <div className="container-fluid mb-4 text-truncate">
        <div className="row">
          <div className="col">
            <h1 className="app-layout-title text-center text-wrap">Error</h1>
          </div>
        </div>
      </div>

      <div className="app-content">{children}</div>

      <Footer />
    </div>
  )
}
