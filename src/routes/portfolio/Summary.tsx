import React from 'react'
import Title from '@/components/widgets/Title'
import { useTranslation, Trans } from 'react-i18next'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Avataro } from '@/components/widgets/Avataro'

interface Props {
  id: string
  iconmap?: IconMap
}

export const Summary = ({ id, iconmap }: Props) => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <Title
              id={id}
              h="h2"
              label={`${t('app:portfolio:summaryTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-3">
            <Trans>app:portfolio:summary</Trans>
          </div>
          <div className="col-md-4 text-center">
            <Avataro size="240px" />
          </div>
        </div>
      </div>
    </>
  )
}
