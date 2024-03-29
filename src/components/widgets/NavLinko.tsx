import { RouteLink } from '@config/routes/routes'
import { Icon, IconMap } from '@components/widgets/Icon'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props {
  routeLink: RouteLink
  external?: boolean
  mode?: 'menu' | 'nav'
}

export const NavLinko = ({ routeLink, external, mode = 'menu' }: Props) => {
  const { t, i18n } = useTranslation()

  const className =
    mode === 'menu' ? 'list-group-item list-group-item-action' : 'nav-link'

  console.log('NavLink', routeLink.url)

  return (
    <NavLink
      // isActive only match to the "end"
      end={true}
      // className={`list-group-item text-nowrap text-truncate list-group-item-action ${className}`}
      className={({ isActive, isPending }) =>
        (isPending ? 'pending' : isActive ? 'active' : '') +
        `  rounded text-nowrap text-truncate ${className}`
      }
      target={external ? '_blank' : ''}
      aria-current="page"
      to={routeLink.url}
    >
      <Icon iconmap={routeLink.iconmap} />
      {/* <div className="vr ms-2 m-0 p-0 bottom-0 position-absolute top-0"></div> */}
      <span className="text-nowrap text-truncate">
        {/* <Trans i18nKey={routeLink.title} default="***"></Trans> */}
        {t(routeLink.title)}
      </span>
      {external && (
        <Icon iconmap={IconMap.External} extra="ms-2 end-0 opacity-25" />
      )}
      {routeLink.parent && (
        <span className="small text-body-tertiary ms-3 ps-3 border-start">
          <Icon iconmap={routeLink.parent.iconmap} />
          <span className="text-nowrap text-truncate">
            {t(routeLink.title)}
          </span>
        </span>
      )}
    </NavLink>
  )
}
