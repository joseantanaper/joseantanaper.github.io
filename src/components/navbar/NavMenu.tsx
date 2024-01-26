import React from 'react'
import { RouteLink } from '@/config/routes/routes'
import { NavLinko } from '../widgets/NavLinko'

interface Props {
  routeLinks: RouteLink[]
}

export const NavMenu = ({ routeLinks }: Props) => {
  return (
    <>
      {/* <div className="vr ms-2 me-3 d-none d-xxl-block"></div> */}
      <div className="d-flex">
        <ul className="navbar-nav">
          {routeLinks
            .filter((routeLink) => routeLink.url.startsWith('/'))
            .map((routeLink: RouteLink, index: number) => {
              if (index < 3)
                return (
                  <li key={`route-link-${index}`} className="nav-item">
                    <NavLinko
                      key={`navmenu-${index}`}
                      routeLink={routeLink}
                      mode="nav"
                    />
                  </li>
                )
            })}
        </ul>
      </div>
    </>
  )
}
