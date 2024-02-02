import { Icon, IconMap } from '@/components/widgets/Icon'
import { ReactNode } from 'react'
import { Trans } from 'react-i18next'

interface Props {
  name?: string
  className?: string
  extraClass?: string
  style?: object
  disabled?: boolean
  iconmap?: IconMap
  iconSize?: number
  iconClass?: string
  label?: string
  labelClass?: string
  async?: boolean
  onClick?: Function
  targetId?: string
  toggle?: 'offcanvas' | 'collapse' | 'modal'
  dismiss?: string
  children?: ReactNode
  dropdown?: ReactNode
  dropdownBreakdown?: string
}

const buttonClass = (className: string, extraClass?: string) => {
  return (
    (!className
      ? 'btn'
      : className.includes('btn-')
      ? 'btn ' + className
      : className) + (extraClass ? ` ${extraClass}` : '')
  )
}

export const Button = ({
  name,
  className = 'btn',
  extraClass = '',
  disabled = false,
  iconmap,
  iconClass,
  iconSize,
  label,
  labelClass,
  async = false,
  onClick,
  children,
}: Props) => {
  const handleClick = (name: string) => {
    if (onClick) {
      console.log('Button', 'handleClick')
      if (async) {
        document
          .querySelectorAll('button[name="' + name + '"]')
          .forEach((button) => {
            button.classList.add('disabled')
            button.querySelectorAll('svg').forEach((icon) => {
              icon.classList.add('d-none')
            })
            button.querySelectorAll('div[class^="spinner"]').forEach((spin) => {
              spin.classList.remove('d-none')
            })
          })
        document
          .querySelectorAll('button[name="' + name + '"]')
          .forEach((spin) => {
            spin.classList.remove('invisible')
          })
      }
      onClick().then(() => {
        if (async) {
          document
            .querySelectorAll('button[name="' + name + '"]')
            .forEach((button) => {
              button.classList.remove('disabled')
              button.querySelectorAll('svg').forEach((icon) => {
                icon.classList.remove('d-none')
              })
              button
                .querySelectorAll('div[class^="spinner"]')
                .forEach((spin) => {
                  spin.classList.add('d-none')
                })
            })
        }
      })
    }
  }
  return (
    <button
      name={name}
      className={buttonClass(className, extraClass)}
      disabled={disabled}
      onClick={() =>
        onClick ? (async ? handleClick(name!) : onClick()) : null
      }
    >
      {async && <div className="spinner-border spinner-border-sm d-none"></div>}
      {iconmap ? <Icon extra={iconClass} id={iconmap} size={iconSize} /> : null}
      {label ? (
        <span className={`text-truncate${labelClass ? ' ' + labelClass : ''}`}>
          <Trans>{label}</Trans>
        </span>
      ) : null}
      {children ? children : null}
    </button>
  )
}

export const ButtonSplit = ({
  name,
  className = 'btn',
  extraClass = '',
  disabled = false,
  iconmap,
  iconSize,
  label,
  labelClass,
  async = false,
  onClick,
  children,
  dropdown,
  dropdownBreakdown = 'md',
}: Props) => {
  const handleClick = (name: string) => {
    if (onClick) {
      console.log('Button', 'handleClick')
      if (async) {
        document
          .querySelectorAll('button[name="' + name + '"]')
          .forEach((button) => {
            button.classList.add('disabled')
            button.querySelectorAll('svg').forEach((icon) => {
              icon.classList.add('d-none')
            })
            button.querySelectorAll('div[class^="spinner"]').forEach((spin) => {
              spin.classList.remove('d-none')
            })
          })
        document
          .querySelectorAll('button[name="' + name + '"]')
          .forEach((spin) => {
            spin.classList.remove('invisible')
          })
      }
      onClick().then(() => {
        if (async) {
          document
            .querySelectorAll('button[name="' + name + '"]')
            .forEach((button) => {
              button.classList.remove('disabled')
              button.querySelectorAll('svg').forEach((icon) => {
                icon.classList.remove('d-none')
              })
              button
                .querySelectorAll('div[class^="spinner"]')
                .forEach((spin) => {
                  spin.classList.add('d-none')
                })
            })
        }
      })
    }
  }

  const mainButton = (btnClass?: string) => (
    <>
      <button
        name={name}
        className={buttonClass(className, btnClass)}
        disabled={disabled}
        onClick={() =>
          onClick ? (async ? handleClick(name!) : onClick()) : null
        }
      >
        {async && (
          <div className="spinner-border spinner-border-sm d-none"></div>
        )}
        {iconmap ? <Icon id={iconmap} size={iconSize} /> : null}
        {label ? (
          <span className={`text-truncate ${labelClass}`}>
            <Trans>{label}</Trans>
          </span>
        ) : null}
      </button>{' '}
      {children ? children : null}
    </>
  )

  const dropButton = () => (
    <button
      type="button"
      className={
        `dropdown-toggle dropdown-toggle-split ` +
        buttonClass(className, extraClass) +
        (dropdownBreakdown ? ` d-none d-${dropdownBreakdown}-block` : '')
      }
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span className="visually-hidden">Toggle Dropdown</span>
    </button>
  )
  return (
    <>
      {mainButton(`d-${dropdownBreakdown}-none`)}
      <div className={`btn-group text-nowrap`}>
        {mainButton(`d-none d-${dropdownBreakdown}-block`)}
        {!className && <div className="vr" style={{ opacity: 0.06 }}></div>}
        {dropButton()}
        <ul role="menu" className="dropdown-menu shadow">
          {dropdown}
        </ul>
      </div>
    </>
  )
}

export const ButtonSplitPlus = ({
  name,
  className = 'btn',
  extraClass = '',
  disabled = false,
  style,
  children,
  dropdown,
  dropdownBreakdown = 'md',
}: Props) => {
  const dropButton = () => (
    <>
      <button
        type="button"
        className={
          `btn dropdown-toggle dropdown-toggle-split ` +
          buttonClass(className, extraClass) +
          (dropdownBreakdown ? ` d-none d-${dropdownBreakdown}-block` : '')
        }
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
    </>
  )

  return (
    <>
      <div className="btn-group" style={style}>
        {children}
        {!className.includes('btn') && (
          <div className="vr" style={{ opacity: 0.06 }}></div>
        )}
        {dropButton()}
        <ul
          role="menu"
          style={{ width: '100%' }}
          className={'dropdown-menu dropdown-menu-end'}
        >
          {dropdown}
        </ul>
      </div>
    </>
  )
}

export const ButtonDismiss = ({
  className = 'btn-outline-secondary',
  extraClass = '',
  disabled = false,
  iconmap,
  label,
  dismiss,
}: Props) => {
  return (
    <button
      className={buttonClass(className, extraClass)}
      disabled={disabled}
      data-bs-dismiss={dismiss}
    >
      {iconmap ? <Icon id={iconmap} /> : null}
      {label ? (
        <span className="text-truncate">
          <Trans>{label}</Trans>
        </span>
      ) : null}
    </button>
  )
}

export const ButtonToggler = ({
  className = 'navbar-toggler',
  extraClass = '',
  iconmap,
  iconSize,
  iconClass,
  label,
  targetId,
  toggle = 'offcanvas',
  children,
}: Props) => {
  return (
    <button
      className={`${buttonClass(className, extraClass)}`}
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={`#${targetId}`}
      aria-controls={`${targetId}`}
      aria-expanded={false}
      aria-label="Toggler"
    >
      {iconmap && <Icon iconmap={iconmap} size={iconSize} extra={iconClass} />}
      {label ? (
        <span className="text-truncate">
          <Trans>{label}</Trans>
        </span>
      ) : null}
      {children ? children : null}
    </button>
  )
}
