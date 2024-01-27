import { Link, NavLink } from 'react-router-dom'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useEffect } from 'react'

interface Props {
  title: string
  subtitle?: string
  iconmap?: IconMap
  type?: 0 | 1
}

export const NavTitle = ({ title, subtitle, iconmap, type = 0 }: Props) => {
  useEffect(() => {
    console.log(title, type)
  }, [])

  return (
    // <NavLink
    //   className={`navbar-brand ${
    //     type === 0 ? 'ms-3' : ''
    //   } w-100 text-truncate text-nowrap`}
    //   to="/"
    // >
    <NavLink className="navbar-brand w-100" to="/">
      <div
        className={`text-nowrap overflow-hidden text-truncate ${
          type === 1 ? 'app-show-on-scroll hide fade ps-3' : ''
        }`}
      >
        {iconmap && <Icon iconmap={iconmap} />}
        {title && <span className="app-navbar-title">{title}</span>}
        {subtitle && (
          <span className="app-navbar-subtitle fst-italic fw-light justify-content-start">
            {subtitle}
          </span>
        )}
      </div>
    </NavLink>
  )
}
