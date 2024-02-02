import { ReactNode, useEffect } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button, ButtonDismiss } from '@/components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { selectTheme, selectBtnTheme } from '@app/reducer/app.slice'
import { buttonStyle } from '@/util/styleTools'
export const enum MenuPosition {
  Start = 'offcanvas-start border-end',
  Top = 'offcanvas-top border-bottom',
  End = 'offcanvas-end border-start',
  Bottom = 'offcanvas-bottom border-top',
}

interface Props {
  id: string
  title: string
  position: MenuPosition
  children: ReactNode
}

export interface MenuProps {
  id: string
  title: string
}

export const Menu = ({ id, title, position, children }: Props) => {
  const currentTheme = useAppSelector(selectTheme)
  const currentBtnTheme = useAppSelector(selectBtnTheme)
  let icon: IconMap = IconMap.None

  const buttonClass = 'danger'

  useEffect(() => {
    console.log('Menu')
  }, [])

  switch (position) {
    case MenuPosition.Top:
      icon = IconMap.MenuTopClose
      break
    case MenuPosition.End:
      icon = IconMap.MenuEndClose
      break
    case MenuPosition.Bottom:
      icon = IconMap.MenuBottomClose
      break
    default:
      icon = IconMap.None
      break
  }

  return (
    <div
      className={`offcanvas ${position} shadow user-select-none`}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      {/* Header */}
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        {position === MenuPosition.Start ? (
          <>
            <ButtonDismiss
              className={`navbar-toggler-dismiss ${buttonStyle(
                currentTheme,
                currentBtnTheme,
                buttonClass
              )}`}
              iconmap={IconMap.MenuStartClose}
              dismiss="offcanvas"
            />
            <h4 className="offcanvas-title" id={`${id}Label`}>
              {title!}
            </h4>
          </>
        ) : (
          <>
            <h4 className="offcanvas-title" id={`${id}Label`}>
              {title!}
            </h4>
            <ButtonDismiss
              className={`navbar-toggler-dismiss ${buttonStyle(
                currentTheme,
                currentBtnTheme,
                buttonClass
              )}`}
              iconmap={icon}
              dismiss="offcanvas"
            />
          </>
        )}
      </div>

      {/* Body */}
      <div className="offcanvas-body text-wrap">{children}</div>
    </div>
  )
}
