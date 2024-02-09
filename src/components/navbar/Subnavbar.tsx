// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings
import { ReactNode } from 'react'
import { NavTitle } from './NavTitle'
import { IconMap } from '@components/widgets/Icon'
import { ButtonToggler } from '@components/widgets/Button'
import { dividerClass } from '@/util/styleTools'

import { t } from 'i18next'

interface Props {
  title?: string
  subtitle?: string
  iconmap?: IconMap
  toolbar?: ReactNode
}

export const Subnavbar = ({ title, subtitle, iconmap, toolbar }: Props) => {
  return (
    <>
      <nav className="app-main-subnavbar-crystal navbar navbar-expand-sm sticky-top text-truncate border-bottom shadow-sm">
        <div className="app-navbar-container container-fluid app-subnavbar">
          {/* <div className="row text-truncate"> */}
          {/* Title */}
          <NavTitle
            title={t(title!)}
            subtitle={subtitle && t(subtitle!)}
            iconmap={iconmap && iconmap}
            type={1}
          />

          <ButtonToggler
            iconmap={IconMap.More}
            toggle="collapse"
            targetId="subnavbarMenu"
          />
          {/* </div> */}

          {/* Nav Menu Start */}
          <div id="app-subnavbar-menu" className={`row col`}>
            {toolbar && (
              <div className={`collapse navbar-collapse`} id="subnavbarMenu">
                <ul
                  className={`navbar-nav navbar-nav-scroll border-start ${dividerClass}`}
                >
                  {toolbar}
                </ul>
              </div>
            )}
          </div>
          {/* Nav Menu End */}
        </div>
      </nav>
    </>
  )
}
