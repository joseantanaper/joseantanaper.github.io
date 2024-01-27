import { Icon } from '@components/widgets/Icon'
import { Menu, MenuProps, MenuPosition } from '@components/menu/elements/Menu'

export const MenuBottom = ({ id, title }: MenuProps) => {
  return (
    <Menu id={id} title={title} position={MenuPosition.Bottom}>
      <div className="offcanvas-body">Hello. I'm the Bottom Menu</div>
    </Menu>
  )
}
