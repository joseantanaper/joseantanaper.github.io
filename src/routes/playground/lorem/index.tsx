import React from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { NavLinko } from '@/components/widgets/NavLinko'
import { Linko } from '@/components/widgets/Linko'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { useTranslation } from 'react-i18next'
import NavbarMenuDivider from '@/components/widgets/NavbarMenuDivider'

interface Chapter {
  id: number
  columns: number
  p: number
}

export const Lorem = () => {
  const { t } = useTranslation()
  let chapters: Array<Chapter> = []
  const chapterGenerator = () => {
    for (let i = 1; i <= 20; i++) {
      chapters.push({
        id: i,
        columns: Math.round(Math.random() * 2 + 1),
        p: Math.round(Math.random() * 20 + 1),
      })
    }
    console.log(chapters)
  }

  chapterGenerator()

  const toolbar = (
    <>
      {chapters.map((chapter) => (
        <li className="nav-item">
          <Linko
            iconmap={IconMap.Code}
            label={`Lorem Ipsum #${chapter.id}`}
            href={`#section${chapter.id}`}
          />
        </li>
      ))}
      <NavbarMenuDivider />
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <div className="container-fluid mb-5">
        {chapters.map((chapter) => (
          <>
            <div className="row">
              <div className="col">
                <h2 id={`section${chapter.id}`}>Lorem Ipsum #{chapter.id}</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col justify-content-between mb-5"
                style={{ columnCount: chapter.columns }}
              >
                <LoremIpsum p={chapter.p} />
              </div>
            </div>
          </>
        ))}
      </div>
    </PageLayout>
  )
}
