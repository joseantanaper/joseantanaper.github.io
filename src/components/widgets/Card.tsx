import React from 'react'
import { Carousel, CarouselItem } from '@/components/widgets/Carousel'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useTranslation, Trans } from 'react-i18next'
import Title from './Title'
import { ReactNode } from 'react'
import { Skill } from '@/routes/portfolio/AcademicItem'
import { SkillLogo } from '@components/widgets/SkillLogo'
import { CustomBackground } from '../../components/widgets/CustomBackground'
import vampirekiller from '@assets/audio/vampirekiller.mp3'

interface Props {
  carouselItems?: CarouselItem[]
  image?: string
  imageClass?: string
  imageHeight?: string
  imageFit?: 'cover' | 'fill' | 'contain' | 'none'
  title?: string
  subtitle?: string
  year?: string
  details?: string
  skills?: Skill[]
  leftLink?: string
  leftLinkIcon?: IconMap
  rightLink?: string
  rightLinkLabel?: string
  rightLinkIcon?: IconMap
  logo?: string
  children?: ReactNode
}

const Card = ({
  carouselItems,
  image,
  imageClass,
  imageHeight = '160px',
  imageFit = 'cover',
  title,
  subtitle,
  year,
  details,
  skills,
  leftLink,
  leftLinkIcon = IconMap.Portfolio,
  rightLink,
  rightLinkLabel = 'app:more',
  rightLinkIcon = IconMap.External,
  logo,
  children,
}: Props) => {
  const { t, i18n } = useTranslation()

  return (
    <div className="card mb-4 shadow-sm">
      {carouselItems && <Carousel carouselItems={carouselItems} />}
      {image && (
        <div style={{ height: imageHeight }}>
          <img
            src={image}
            alt={`${title}`}
            className={`card-img-top ${imageClass}`}
            style={{
              objectFit: imageFit,
              height: '100%',
            }}
          />
        </div>
      )}
      {logo && title && <CustomBackground logo={logo} label={title} />}
      {children ? children : null}
      <div className="card-body border-top">
        {title && (
          <Title h="h5" className="card-title">
            {title}
          </Title>
        )}
        {subtitle && (
          <p className="card-text text-primary fw-light">
            <Trans>{subtitle}</Trans>
            <span className="text-primary float-end border-start ms-3 ps-3">
              {year}
            </span>
          </p>
        )}
        {details && (
          <p className="card-text text-end fw-light">
            <Trans>{details}</Trans>
          </p>
        )}
        {skills && (
          <div className="row mt-3">
            {skills.map((skill, index) => (
              <div className="col" key={`skill-div-${index}`}>
                <SkillLogo
                  key={`skill-item-${index}`}
                  logo={skill.logo}
                  label={skill.label}
                />
              </div>
            ))}
          </div>
        )}
        {skills?.find((skill) => skill.logo === 'simonbelmont') && (
          <audio controls className="app-audio w-100">
            {/* <source src="src/assets/audio/vampirekiller.mp3" /> */}
            <source src={vampirekiller} />
          </audio>
        )}
        <div className="">
          {leftLink && (
            <a
              href={leftLink}
              target="_blank"
              className="btn btn-outline-primary"
            >
              <Icon iconmap={leftLinkIcon} extra="text-primary" />
            </a>
          )}
          {rightLink && (
            <a
              href={rightLink}
              target="_blank"
              className="btn btn-outline-primary text-truncate float-end"
            >
              <Icon iconmap={rightLinkIcon} extra="text-primary" />
              {rightLinkLabel && (
                <span className="text-truncate">{t(rightLinkLabel)}</span>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
