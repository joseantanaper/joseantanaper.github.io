import React from 'react'
import { Avataro } from '@/components/widgets/Avataro'
import { routeLinks, moreLinks, RouteLink } from '@/config/routes/routes'
import { NavLinko } from '../widgets/NavLinko'
import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer id="footer">
      <div className="app-shadow-divider mt-5"></div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4 fw-lighter border-end">
            <Avataro size="120px" className="d-flex shadow" />
            <br />
            <p className=" text-justify">
              <Trans>app:footer:bio</Trans>
            </p>
            <br />
            <code className="text-start">
              <div>
                SSR:{' '}
                <span className="text-primary">
                  {import.meta.env.SSR ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                Build time:{' '}
                <span className="text-primary">{APP_BUILD_TIME}</span>
              </div>
              <div>
                Execution mode:{' '}
                <span className="text-primary">{import.meta.env.MODE}</span>
              </div>
              <div>
                Base url:{' '}
                <span className="text-primary">{import.meta.env.BASE_URL}</span>
              </div>
              <div>
                Deploy mark: <span className="text-primary">Hello</span>
              </div>
            </code>
          </div>
          <div className="col-12 col-md-8 fw-lighter">
            <div className="row ms-3">
              <div className="col-12 col-lg-4 text-truncate">
                <h5>{t('Main Sections')}</h5>
                <div className="list-group list-group-flush">
                  {[...(routeLinks as RouteLink[])]
                    .filter((routeLink) => !routeLink.items)
                    .map((routeLink, index: number) => (
                      <NavLinko
                        key={`footer-main-${index}`}
                        routeLink={routeLink}
                      />
                    ))}
                </div>
              </div>
              <div className="col-12 col-lg-4 text-center text-truncate">
                <h5>{t('Secondary Sections')}</h5>
                <div className="list-group list-group-flush">
                  {[...routeLinks]
                    .filter((routeLink) => routeLink.items)
                    .map((routeLink, index) => {
                      return (
                        routeLink.items &&
                        routeLink.items.map((subrouteLink, subindex) => (
                          <NavLinko
                            key={`footer-2nd-${index}-${subindex}`}
                            routeLink={subrouteLink}
                          />
                        ))
                      )
                    })}
                </div>
              </div>
              <div className="col-12 col-lg-4 text-end text-truncate">
                <h5>{t('More')}</h5>
                <div className="list-group list-group-flush">
                  {moreLinks.map((moreLink: RouteLink, index: number) => (
                    <NavLinko
                      key={`more-${index}`}
                      routeLink={moreLink}
                      external={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5"></div>
    </footer>
  )
}

export default Footer
