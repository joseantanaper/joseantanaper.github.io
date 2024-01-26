import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Icon, IconMap } from '@/components/widgets/Icon'
import Title from '@/components/widgets/Title'
import { SkillLogo } from '@/components/widgets/SkillLogo'

import Card from '@/components/widgets/Card'
import { CustomBackground } from '../../components/widgets/CustomBackground'

export interface AcademicEntry {
  title: string
  year: string
  entity: string
  logo: string
  details?: string
  skills?: Skill[]
  leftLink?: string
  rightLink?: string
}

export interface Skill {
  logo: string
  label: string
}

interface Props {
  academicItem: AcademicEntry
  academicIndex: number
  mode: number
  titleIcon?: IconMap
  entityIcon?: IconMap
  leftLinkIcon?: IconMap
  leftLinkLabel?: string
  rightLinkIcon?: IconMap
  rightLinkLabel?: string
}

export const AcademicItem = ({
  academicItem,
  academicIndex,
  mode,
  titleIcon,
  entityIcon,
  leftLinkIcon,
  rightLinkIcon,
  rightLinkLabel,
}: Props) => {
  const { t, i18n } = useTranslation()

  const colSize = () => {
    switch (academicItem.logo) {
      case 'fullstack':
        return 'col-12 col-lg-6 col-xxl-8'
      default:
        return 'col-12 col-lg-6 col-xxl-4'
    }
  }

  return mode === 0 ? (
    <>
      <div className="row" key={`academic-${academicIndex}`}>
        <div className="col">
          <div className="row border rounded shadow-sm py-3 mb-3">
            <div className="col-9">
              {academicItem.title && (
                <div className="row">
                  <div className="col">
                    <Title h="h4" iconmap={titleIcon || IconMap.Academic}>
                      <Trans>
                        {academicItem.title}
                        {mode}
                      </Trans>
                    </Title>
                  </div>
                </div>
              )}

              {academicItem.entity && (
                <div className="row">
                  <div className="col">
                    <Title
                      h="h6"
                      iconmap={entityIcon || IconMap.Business}
                      className="text-primary fw-normal d-flex"
                    >
                      <Trans>{academicItem.entity}</Trans>
                      <Title
                        h="h6"
                        iconmap={IconMap.CalendarCheck}
                        className="text-primary fw-light border-start ms-3 ps-3"
                      >
                        {academicItem.year && (
                          <span className="text-primary  fw-light">
                            {academicItem.year}
                          </span>
                        )}
                      </Title>
                    </Title>
                  </div>
                </div>
              )}

              {academicItem.details && (
                <div className="row">
                  <div className="col">
                    <Trans>{academicItem.details}</Trans>
                  </div>
                </div>
              )}
              {academicItem.skills && (
                <div className="row mt-3">
                  {academicItem.skills.map((skill, index) => (
                    <div className="col" key={`skill-div-${index}`}>
                      <SkillLogo
                        key={`skill-item-${index}`}
                        logo={skill.logo}
                        label={skill.label}
                        className="me-3 mb-3"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-3">
              {academicItem.logo && academicItem.title && (
                <CustomBackground
                  logo={academicItem.logo}
                  label={academicItem.title}
                />
              )}

              <div className="pt-3">
                {academicItem.leftLink ? (
                  <a
                    href={academicItem.leftLink}
                    target="_blank"
                    className="btn btn-outline-primary float-start"
                  >
                    <Icon iconmap={leftLinkIcon} extra="text-primary" />
                  </a>
                ) : null}
                {academicItem.rightLink ? (
                  <a
                    href={academicItem.rightLink}
                    target="_blank"
                    className="btn btn-outline-primary float-end"
                  >
                    <Icon iconmap={rightLinkIcon} extra="text-primary" />
                    {rightLinkLabel ? <span>{t(rightLinkLabel)}</span> : ''}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className={colSize()}>
        <Card
          key={`academic-item-${academicIndex}`}
          title={academicItem.title}
          subtitle={academicItem.entity}
          year={academicItem.year}
          details={academicItem.details}
          skills={academicItem.skills}
          leftLinkIcon={leftLinkIcon}
          leftLink={academicItem.leftLink}
          rightLinkIcon={rightLinkIcon}
          rightLink={academicItem.rightLink}
          rightLinkLabel={rightLinkLabel}
          logo={academicItem.logo}
        ></Card>
      </div>
    </>
  )
}
