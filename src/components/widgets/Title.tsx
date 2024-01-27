import React from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  id?: string
  h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  label?: string
  className?: string
  iconmap?: IconMap
  children?: ReactNode
}

const Title = ({ id, h, label, className, iconmap, children }: Props) => {
  const { t } = useTranslation()
  const content = (
    <>
      {iconmap ? <Icon iconmap={iconmap} /> : null}
      {label ? t(label) : null}
      {children ? children : null}
    </>
  )
  switch (h) {
    case 'h1':
      return (
        <h1 id={id} className={className}>
          {content}
        </h1>
      )
    case 'h2':
      return (
        <h2 id={id} className={className}>
          {content}
        </h2>
      )
    case 'h3':
      return (
        <h3 id={id} className={className}>
          {content}
        </h3>
      )
    case 'h4':
      return (
        <h4 id={id} className={className}>
          {content}
        </h4>
      )
    case 'h5':
      return (
        <h5 id={id} className={className}>
          {content}
        </h5>
      )
    case 'h6':
      return (
        <h6 id={id} className={className}>
          {content}
        </h6>
      )
  }
}

export default Title
