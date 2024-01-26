import { Icon } from '@components/widgets/Icon'
import { Menu, MenuProps, MenuPosition } from '@components/menu/elements/Menu'

export const MenuTop = ({ id, title }: MenuProps) => {
  return (
    <Menu id={id} title={title} position={MenuPosition.Top}>
      <div className="offcanvas-body">Hello. I'm the Top Menu</div>
    </Menu>
  )
}
