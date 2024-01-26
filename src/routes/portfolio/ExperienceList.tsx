import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { IconMap } from '@/components/widgets/Icon'
import { ExperienceItem, ExperienceEntry } from './ExperienceItem'
import Title from '@/components/widgets/Title'

interface Props {
  id: string
  iconmap?: IconMap
}

export const ExperienceList = ({ id, iconmap }: Props) => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <Title
              id={id}
              h="h2"
              label={`${t('app:portfolio:experienceTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {(
              i18n.t('app:portfolio:experience', {
                returnObjects: true,
                defaultValue: [],
              }) as ExperienceEntry[]
            ).map((experienceItem: ExperienceEntry, experienceIndex) => (
              <ExperienceItem
                key={`experience-item-${experienceIndex}`}
                experienceItem={experienceItem}
                experienceIndex={experienceIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

/*
<Card
  title="SEAT Martorell"
  image={seat}
  imageClass=""
  details="app:portfolio:seat"
  linkedinLink="https://es.linkedin.com/company/seat-sa"
  moreLink="https://www.seat-mediacenter.es/smc/seat-sa/facilitiespage/martorell-production-facility"
/>
<Card
  title="Volkswagen Navarra"
  image={vw}
  imageClass=""
  details="app:portfolio:vw"
  linkedinLink="https://es.linkedin.com/company/volkswagen-navarra"
  moreLink="https://vw-navarra.es/"
/>

<div className="row">
  <div className="col">
    <Card
      image={arghos}
      imageClass="p-2"
      details="app:portfolio:arghos"
      linkedinLink="https://es.linkedin.com/company/arghos"
      moreLink="https://www.arghos.es/"
    />
  </div>
  <div className="col">
    <Card
      image={aernnova}
      imageClass="py-4 px-2"
      details="app:portfolio:aernnova"
      linkedinLink="https://es.linkedin.com/company/aernnova"
      moreLink="https://www.aernnova.com/es/"
    />
  </div>
  <div className="col">
    <Card
      title="KH Lloreda"
      image={kh7}
      details="app:portfolio:aernnova"
      linkedinLink="https://es.linkedin.com/company/aernnova"
      moreLink="https://www.aernnova.com/es/"
    />
  </div>
</div>

*/
