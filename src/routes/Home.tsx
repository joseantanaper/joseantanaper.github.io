import { PageLayout } from '@/components/layout/PageLayout'
import { Avatar, LoremIpsum } from 'react-lorem-ipsum'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Linko } from '@/components/widgets/Linko'
import { useTranslation, Trans } from 'react-i18next'
import { Avataro } from '@/components/widgets/Avataro'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import Title from '@/components/widgets/Title'
import NavbarMenuDivider from '@/components/widgets/NavbarMenuDivider'

export interface LoaderData {
  iconmap?: IconMap
}

const Home = () => {
  const { t, i18n } = useTranslation()
  const loader = (useLoaderData() as LoaderData) || {}
  const { iconmap } = loader

  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('Section')} #1`}
          href="#section1"
        />
      </li>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('Section')} #2`}
          href="#section2"
        />
      </li>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('Section')} #3`}
          href="#section3"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('Section')} #4`}
          href="#section4"
        />{' '}
      </li>

      <NavbarMenuDivider />

      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  useEffect(() => {
    console.log('Index', 'useEffect')
  }, [])

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <div className="container-fluid mb-5">
        {/* Section 1 */}
        <div className="row">
          <div className="col">
            <Title
              id="section1"
              h="h2"
              label={`${t('Section')} #1: ${t('app:home:navbarTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <Trans>app:home:navbar</Trans>
          </div>
          <div className="col-md text-center">
            <Avataro size="40%" label="Custom Avatar" className="shadow" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <Title
              id="section2"
              h="h2"
              label={`${t('Section')} #2: ${t('app:home:routeTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md text-center mb-3">
            <Icon
              iconmap={IconMap.Hypnotize}
              extra="app-hypnotize-rotate app-big-svg mb-3"
            />
            <br />
            <span className="app-legend">SVG with CSS animation</span>
          </div>
          <div className="col-md">
            <Trans>{'app:home:route'}</Trans>
          </div>
        </div>
        <div className="row mt-5"></div>
      </div>

      {/* Section 3 */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <Title
              id="section3"
              h="h2"
              label={`${t('Section')} #3: ${t('app:home:layoutTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <Trans>app:home:layout</Trans>
          </div>
          <div className="col-md text-center mt-3">
            <Icon
              iconmap={IconMap.Radar}
              extra="app-radar-rotate app-big-svg"
            />
            <br />
            <span className="app-legend">
              <Trans>A Radar looking for ghosts!</Trans>
            </span>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <Title
              id="section4"
              h="h2"
              label={`${t('Section')} #4: ${t('app:home:bootstrapTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="row">
              {[0, 1, 2, 3].map((user, index) => {
                return (
                  <div
                    key={`div-avatar-${index}`}
                    className="col px-5 text-center"
                  >
                    <Avatar
                      gender="all"
                      className="avatar app-rotate rounded-circle app-profile mb-5 shadow-lg"
                      width="200"
                      height="200"
                      alt="Avatar"
                    />
                  </div>
                )
              })}
              <span className="app-legend text-center">
                <Trans>Random Avatars</Trans>
              </span>
            </div>
          </div>
          <div className="col-md">
            <div className="row">
              <div className="col">
                <Trans>app:home:bootstrap</Trans>
                <ul className="app-custom-list">
                  {(
                    i18n.t('app:home:bootstrapItems', {
                      returnObjects: true,
                    }) as string[]
                  ).map((item, index) => (
                    <li key={`bootstrap-${index}`}>
                      <Trans>{item}</Trans>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home
