import React from 'react'
import { Icon, IconMap } from './Icon'
import { Button } from './Button'

interface Props {
  name?: string
  placeholder?: string
  className?: string
  style?: Object
  value?: string
  type?: 'text' | 'number'
  disabled?: boolean
  search?: boolean
  onChange?: Function
  clear?: Function
}

export const Input = ({
  name,
  placeholder,
  className,
  style,
  value,
  type = 'text',
  disabled,
  search,
  onChange,
  clear,
}: Props) => {
  if (search) {
    return (
      // <div className="btn-group w-100">
      <div className={`input-group flex-nowrap ${className}`}>
        <input
          className={`form-control z-0 text-truncate ${className}`}
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          disabled={disabled}
          onChange={(e) => (onChange ? onChange(e.target.value) : null)}
          // style={{ paddingRight: '26px', minWidth: '120px' }}
          style={{
            ...style,
            minWidth: '120px',
            paddingRight: '26px',
          }}
        />
        <Icon
          id={IconMap.Search}
          extra="app-search text-primary opacity-50"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            top: '14px',
            right: '58px',
          }}
        />
        {clear && (
          <Button
            className="btn-outline-danger"
            iconmap={IconMap.Backspace}
            disabled={!value}
            onClick={() => clear && clear()}
          />
        )}
      </div>
      // </div>
    )
  } else {
    return (
      <input
        className="form-control text-truncate"
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        style={style}
        // style={{ minWidth: '120px' }}
      />
    )
  }
}
