import { NavLink } from 'react-router-dom'
import { ButtonToggler } from '@components/widgets/Button'
import { ThemeToggler } from '@components/toggler/ThemeTogglerv2'
import { MiniCounter } from '@components/toggler/MiniCounter'
import { MenuEnd } from '@components/menu/MenuEnd'
import { MenuTop } from '@components/menu/MenuTop'
import { MenuBottom } from '@components/menu/MenuBottom'
import { MenuStart } from '@components/menu/MenuStart'
import { NavMenu } from './NavMenu'
import { LocaleToggler } from '../toggler/LocaleToggler'
import { Clock } from '@components/navbar/Clock'
import { NavTitle } from '@components/navbar/NavTitle'
import { Avataro } from '@/components/widgets/Avataro'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useAppSelector } from '@app/hooks'

// import { routeLinks, RouteLink } from '@config/nav.config'
import { routeLinks, RouteLink } from '@config/routes/routes'

import { t } from 'i18next'

// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings

import {
  selectTheme,
  selectLocale,
  selectClockMode,
} from '@app/reducer/app.slice'

interface Props {
  title: string
  subtitle?: string
}

export const Navbar = ({ title, subtitle }: Props) => {
  const currentTheme = useAppSelector(selectTheme)
  const currentLocale = useAppSelector(selectLocale)
  const currentClockMode = useAppSelector(selectClockMode)

  // const dividerClass = 'border-start ps-1 ms-1 ps-sm-2 ms-sm-2 ps-lg-3 ms-lg-3'
  const dividerClass = 'ps-1 ms-1 ps-sm-2 ms-sm-2 ps-lg-3 ms-lg-3'

  return (
    <header>
      <nav className="app-main-navbar-crystal navbar border-bottom shadow-sm fixed-top">
        {/* Navbar Begin */}
        <div className="app-navbar-container container-fluid flex-nowrap">
          <ButtonToggler
            targetId="offcanvasMenuNav"
            iconmap={IconMap.MenuStart}
          />
          {/* Title */}
          <NavTitle title={t(title)} subtitle={t(subtitle!)} type={0} />
          {/* Menu */}

          <div className={`d-none d-lg-block ${dividerClass}`}>
            <NavMenu routeLinks={routeLinks as RouteLink[]} />
          </div>
          {/* Buttons */}

          <div className={`d-none d-lg-block ${dividerClass}`}>
            <LocaleToggler />
          </div>
          {/* Mini Counter */}

          <div className={`d-none d-md-block ${dividerClass}`}>
            <MiniCounter />
          </div>
          {/* Clock */}

          <div className={`d-none d-sm-block ${dividerClass}`}>
            <Clock currentClockMode={currentClockMode} />
          </div>

          {/* Global Toolbar */}
          <div className={`${dividerClass}`}>
            <ThemeToggler currentTheme={currentTheme} />
          </div>

          <div className={`${dividerClass}`}>
            <div className={`btn-group`}>
              <ButtonToggler
                targetId="offcanvasMenuTop"
                className="btn-outline-secondary"
                iconmap={IconMap.MenuTop}
              />
              <ButtonToggler
                targetId="offcanvasMenuBottom"
                className="btn-outline-secondary"
                iconmap={IconMap.MenuBottom}
              />
            </div>
          </div>

          {/* {divider('d-inline d-sm-none')} */}
          <div className={`${dividerClass}`}>
            <div className={`btn-group`}>
              <ButtonToggler
                targetId="offcanvasMenuSettings"
                extraClass="p-0 m-0"
              >
                <Avataro />
              </ButtonToggler>
            </div>
          </div>

          {/* Navbar End */}
        </div>

        <MenuStart
          id="offcanvasMenuNav"
          title={t('Navigation')}
          routeLinks={routeLinks as RouteLink[]}
        />
        <MenuEnd id="offcanvasMenuSettings" title={t('Settings')} />
        <MenuTop id="offcanvasMenuTop" title={t('Menu Top')} />
        <MenuBottom id="offcanvasMenuBottom" title={t('Menu Bottom')} />
      </nav>
    </header>
  )
}
