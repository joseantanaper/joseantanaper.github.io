import React from 'react'
import { useEffect, useState } from 'react'
import { routeLinks, RouteLink, routeLinkIsGroup } from '@config/routes/routes'
import { NavLinko } from '@components/widgets/NavLinko'
import { Accordion } from './Accordion'
import { Input } from '@components/widgets/Input'
import { t } from 'i18next'

interface Props {
  // routeLinks: RouteLink[]
  parentIndex: number
}

const renderRouteLink = (
  routeLink: RouteLink,
  parentIndex: number,
  index: number
) => {
  if (!routeLinkIsGroup(routeLink.url)) {
    return (
      <NavLinko key={`menu-${parentIndex}-${index}`} routeLink={routeLink} />
    )
  } else {
    const subRouteLinks: RouteLink[] = routeLink.items as RouteLink[]
    const accordionId = `accordion-${index}`
    return (
      <Accordion
        id={accordionId}
        key={accordionId}
        title={t(routeLink.title)}
        index={parentIndex}
        iconmap={routeLink.iconmap}
      >
        <div
          key={`accordion-${parentIndex}`}
          className="list-group list-group-flush"
          // If closing offcanvas when click is needed
          data-bs-dismiss="offcanvas"
        >
          {subRouteLinks &&
            subRouteLinks.map((routeLink: RouteLink, index: number) => (
              <NavLinko
                key={`menu-2nd-${parentIndex}-${index}`}
                routeLink={routeLink}
              />
            ))}
        </div>
      </Accordion>
    )
  }
}

export const NavRouteLinkList = ({ parentIndex }: Props) => {
  const [search, setSearch] = useState('')
  const [linkCount, setLinkCount] = useState(0)
  const [filteredRouteLinks, setFilteredRouteLinks] = useState(routeLinks)

  const countLinks = () => {
    let counter: number = 0
    counter += [...routeLinks].filter((link) =>
      routeLinkIsGroup(link.url)
    ).length
    ;[...routeLinks].forEach((link) => {
      if (link.items) counter += link.items!.length
    })
    return counter
  }

  const filterLinks = (search: string) => {
    setSearch(search)
    let filtered: RouteLink[] = []
    setLinkCount(countLinks())
    if (search) {
      console.log(routeLinks)
      ;[...routeLinks].forEach((link: RouteLink) => {
        if (
          t(link.title) //Search in translated title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        )
          filtered.push(link)
      })
      ;[...routeLinks].forEach((link: RouteLink) => {
        link.items &&
          link.items!.forEach((sublink: RouteLink) => {
            if (
              t(sublink.title) //Search in translated title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )
              filtered.push({ ...sublink, parent: link })
          })
      })
      setFilteredRouteLinks(filtered)
    } else {
      setFilteredRouteLinks([...routeLinks])
    }
  }

  const clearFilter = () => {
    setSearch('')
    setFilteredRouteLinks([...routeLinks])
  }

  useEffect(() => {
    filterLinks('')
  }, [])

  return (
    <>
      <Input
        type="text"
        search={true}
        value={search}
        placeholder="Search links..."
        onChange={filterLinks}
        clear={clearFilter}
      />

      <div className="text-end mt-1 mb-3">
        <div className="btn-group">
          <span className="btn btn-outline-secondary disabled text-body">
            {t('app:links')}
          </span>
          <span className="btn btn-outline-secondary disabled text-body">
            {search ? filteredRouteLinks.length : linkCount} / {linkCount}
          </span>
        </div>
      </div>

      <div
        key={parentIndex}
        className="list-group list-group-flush"
        // If closing offcanvas when click is needed
        data-bs-dismiss="offcanvas"
      >
        {filteredRouteLinks
          .filter((routeLink) => !routeLinkIsGroup(routeLink.url))
          .map((routeLink, index) => {
            return renderRouteLink(routeLink, parentIndex, index)
          })}
      </div>

      <br />

      {filteredRouteLinks
        .filter((routeLink) => routeLink.url.startsWith('#'))
        .map((routeLink, index) => {
          return renderRouteLink(routeLink, parentIndex, index)
        })}
    </>
  )
}
