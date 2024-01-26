import React from 'react'
import { Icon, IconMap } from './Icon'
import { useTranslation } from 'react-i18next'

interface Props {
  iconmap: IconMap
  label: string
  href: string
}

export const Linko = ({ iconmap, label, href }: Props) => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <a className="nav-link" href={href}>
        <Icon id={iconmap} />
        {label ? <span>{t(label)}</span> : null}
      </a>
    </>
  )
}
