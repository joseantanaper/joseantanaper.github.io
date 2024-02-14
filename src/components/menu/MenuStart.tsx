import { Icon, IconMap } from '@components/widgets/Icon'
import { Menu, MenuProps, MenuPosition } from '@components/menu/elements/Menu'
import { NavRouteLinkList } from '@components/menu/elements/NavRouteLinkList'
import { routeLinks, RouteLink } from '@config/routes/routes'

interface Props extends MenuProps {
  routeLinks: RouteLink[]
}

export const MenuStart = ({ id, title, routeLinks }: Props) => {
  return (
    <Menu id={id} title={title} position={MenuPosition.Start}>
      <NavRouteLinkList parentIndex={0} />
    </Menu>
  )
}
