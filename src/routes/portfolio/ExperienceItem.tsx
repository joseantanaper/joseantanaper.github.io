import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import Card from '@/components/widgets/Card'
import { IconMap } from '@/components/widgets/Icon'
import { CarouselItem } from '@components/widgets/Carousel'

import circa from '@assets/omegazeta/projects/1I6A9650web.jpg'
import hostaletsPierola from '@assets/omegazeta/projects/Ajuntament-de-Hostalets-de-Pierola-1-1024x572.jpg'
import blanquerna from '@assets/omegazeta/projects/Biblioteca-Blanquerna-1-1024x572.jpg'
import santVicens from '@assets/omegazeta/projects/Biblioteca-Sant-Vicenç-de-Castellet-1-1024x490.jpg'
import canCaralleu from '@assets/omegazeta/projects/Can-Caralleu-1-1024x536.jpg'
import castellers from '@assets/omegazeta/projects/Edificio-Castellers-de-Gracia-1-1024x490.jpg'
import esparreguera from '@assets/omegazeta/projects/Edificio-de-viviendas-en-Esparreguera-11.jpg'
import manlleu from '@assets/omegazeta/projects/Edificio-La-Vola-Manlleu-1-1024x490.jpg'
import sitges from '@assets/omegazeta/projects/Sitges-1-1024x490.jpg'
import reus from '@assets/omegazeta/projects/Tecnoparc-de-Reus-1-1024x490.jpg'

import { CustomBackground } from '@/components/widgets/CustomBackground'

const omegazetaImages: CarouselItem[] = [
  {
    img: circa,
    title: 'CIRCA, S.A.',
    subtitle: 'Fábrica en Lliçà de Vall (Granollers)',
    link: 'https://panelomegazeta.com/nosotros/',
  },
  {
    img: hostaletsPierola,
    title: 'Hostalets de Pierola',
    subtitle: 'Ajuntament',
    link: 'https://elshostaletsdepierola.cat/',
  },
  {
    img: blanquerna,
    title: 'Biblioteca de la Facultad de Comunicación',
    subtitle: 'Universidad Blanquerna',
    link: 'https://www.interempresas.net/Cerramientos_y_ventanas/Articulos/51438-Panel-Omega-Zeta-una-innovadora-propuesta-en-arquitectura.html',
  },
  {
    img: santVicens,
    title: 'Biblioteca Salvador Vives Casajuana',
    subtitle: 'Sant Vicenç de Castellet',
    link: 'https://bibliotecavirtual.diba.cat/es/sant-vicenc-de-castellet-biblioteca-salvador-vives-casajuana',
  },
  {
    img: canCaralleu,
    title: 'Vivienda Unifamiliar',
    subtitle: 'Can Caralleu (Barcelona)',
  },
  {
    img: castellers,
    title: 'Edificio Castellers de la Vila de Gràcia',
    subtitle: 'Barcelona',
    link: 'https://cvg.cat/',
  },
  {
    img: esparreguera,
    title: 'Edificio de Viviendas',
    subtitle: 'Esparreguera',
  },
  {
    img: manlleu,
    title: 'Edificio La Vola',
    subtitle: 'Manlleu (Osona-Barcelona)',
    link: 'https://www.construible.es/2008/02/03/ecoedificio-de-la-vola',
  },
  {
    img: sitges,
    title: 'Vivienda Unifamiliar',
    subtitle: 'Sitges. Estudio Jon Tugores',
  },
  {
    img: reus,
    title: 'Tecnoparc',
    subtitle: 'Reus',
    link: 'https://www.reus.cat/tecnoparc-reus',
  },
]

export interface ExperienceEntry {
  title: string[]
  year: string
  subtitle: string[]
  details: string[]
}

interface Props {
  experienceItem: ExperienceEntry
  experienceIndex: number
}

export const ExperienceItem = ({ experienceItem, experienceIndex }: Props) => {
  const { t, i18n } = useTranslation()
  return (
    <div className="row mb-5" key={`experience-${experienceIndex}`}>
      <div className="col">
        <div className="row">
          <div className="col">
            <Title h="h4" iconmap={IconMap.Wallet}>
              {/* Cannot use map directly */}
              {Object.keys(experienceItem.title).map((key: any, index) => (
                <span
                  key={`title-${experienceIndex}-${index}`}
                  className="border-end pe-3 me-3"
                >
                  {experienceItem.title[key]}
                </span>
              ))}
              <span
                key={`titlex-${experienceIndex}`}
                className="text-primary fw-light"
              >
                {experienceItem.year}
              </span>
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Title h="h6" iconmap={IconMap.Business} className="text-primary">
              {Object.keys(experienceItem.subtitle).map((key: any, index) => (
                <span
                  key={`subtitle-${experienceIndex}-${index}`}
                  className={
                    key < experienceItem.subtitle.length - 1
                      ? `border-end pe-3 me-3`
                      : ''
                  }
                >
                  {experienceItem.subtitle[key]}
                </span>
              ))}
            </Title>
            {Object.keys(experienceItem.details).map((key: any, index) => (
              <div
                key={`experience-${experienceIndex}-${index}`}
                className="ps-3 mb-4 border-5 border-start"
              >
                <Trans>{experienceItem.details[key]}</Trans>
              </div>
            ))}
            {experienceIndex === 0 && (
              <div className="row p-2">
                <div className="col">
                  <div className="row">
                    <div className="col-sm-6 col-xxl-3 mb-3">
                      <CustomBackground
                        logo="omegazetacorporacion"
                        label="Corporación Omega Zeta"
                      />
                    </div>
                    <div className="col-sm-6 col-xxl-3 mb-3">
                      <CustomBackground
                        logo="omegazetacirca"
                        label="CIRCA, S.A."
                      />
                    </div>
                    <div className="col-sm-6 col-xxl-3 mb-3">
                      <CustomBackground
                        logo="omegazetananjing"
                        label="Omega Zeta Nanjing"
                      />
                    </div>
                    <div className="col-sm-6 col-xxl-3 mb-3">
                      <CustomBackground
                        logo="omegazetaclinica"
                        label="Clínica Omega Zeta"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            {experienceIndex === 0 ? (
              <Card
                carouselItems={omegazetaImages}
                title="CIRCA, S.A."
                details="app:portfolio:omegazeta"
                leftLink="https://www.linkedin.com/company/circa---panel-omega-zeta/about/"
                rightLink="https://panelomegazeta.com/nosotros/"
              />
            ) : (
              <>
                <div className="row">
                  <div className="col">
                    <Card
                      imageClass="p-2 bg-dark"
                      imageFit="contain"
                      details="app:portfolio:arghos"
                      leftLink="https://es.linkedin.com/company/arghos"
                      rightLink="https://www.arghos.es/"
                    >
                      <CustomBackground logo="arghos" label="Arghos" />
                    </Card>
                  </div>
                  <div className="col">
                    <Card
                      imageClass="py-4 px-2 bg-dark"
                      imageFit="contain"
                      details="app:portfolio:aernnova"
                      leftLink="https://es.linkedin.com/company/aernnova"
                      rightLink="https://www.aernnova.com/es/"
                    >
                      <CustomBackground logo="aernnova" label="AERnnova" />
                    </Card>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
