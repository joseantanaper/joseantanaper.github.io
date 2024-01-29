import { PageLayout, LoaderData } from '@components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@components/widgets/Title'
import { IconMap } from '@components/widgets/Icon'
import { Avataro } from '@components/widgets/Avataro'
import { Summary } from './Summary'
import { ExperienceList } from './ExperienceList'
import { AcademicList } from './AcademicList'
import { Linko } from '@components/widgets/Linko'

export const Portfolio = () => {
  const { t, i18n } = useTranslation()
  const loader = (useLoaderData() as LoaderData) || {}
  const { iconmap } = loader ?? IconMap.Code

  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:summaryTitle')}`}
          href="#summary"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:experienceTitle')}`}
          href="#experience"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:academicTitle')}`}
          href="#academic"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:certificationTitle')}`}
          href="#certifications"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:skillsTitle')}`}
          href="#skills"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:hobbiesTitle')}`}
          href="#hobbies"
        />
      </li>
      <div className="vr"></div>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      {/* Summary */}
      <Summary id="summary" iconmap={iconmap} />

      {/* Experience */}
      <ExperienceList id="experience" iconmap={iconmap} />

      {/* Academic Background */}
      <AcademicList
        id="academic"
        title="app:portfolio:academicTitle"
        entry="app:portfolio:academic"
        leftLinkIcon={IconMap.Portfolio}
        rightLinkLabel="app:site"
        rightLinkIcon={IconMap.Code}
        iconmap={iconmap}
      />

      {/* Certification */}
      <AcademicList
        id="certifications"
        title="app:portfolio:certificationTitle"
        entry="app:portfolio:certification"
        leftLinkIcon={IconMap.Code}
        rightLinkIcon={IconMap.Academic}
        rightLinkLabel="app:portfolio:viewMyCert"
        iconmap={iconmap}
      />

      {/* Skills */}
      <AcademicList
        id="skills"
        title="app:portfolio:skillsTitle"
        entry="app:portfolio:skills"
        titleIcon={IconMap.Workspace}
        leftLinkIcon={IconMap.Code}
        rightLinkIcon={IconMap.Academic}
        rightLinkLabel="app:portfolio:viewMyCert"
        iconmap={iconmap}
      />

      {/* Hobbies */}
      <AcademicList
        id="hobbies"
        title="app:portfolio:hobbiesTitle"
        entry="app:portfolio:hobbies"
        titleIcon={IconMap.Workspace}
        leftLinkIcon={IconMap.Code}
        rightLinkIcon={IconMap.Academic}
        rightLinkLabel="app:portfolio:viewMyCert"
        iconmap={iconmap}
      ></AcademicList>
    </PageLayout>
  )
}

export default Portfolio
