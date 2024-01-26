import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { AcademicItem, AcademicEntry } from './AcademicItem'
import Title from '@/components/widgets/Title'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button } from '@/components/widgets/Button'

interface Props {
  id: string
  title: string
  entry: string
  iconmap?: IconMap
  titleIcon?: IconMap
  entityIcon?: IconMap
  leftLinkIcon?: IconMap
  leftLinkLabel?: string
  rightLinkIcon?: IconMap
  rightLinkLabel?: string
}

export const AcademicList = ({
  id,
  title,
  entry,
  iconmap,
  titleIcon,
  entityIcon,
  leftLinkIcon,
  leftLinkLabel,
  rightLinkIcon,
  rightLinkLabel,
}: Props) => {
  const [mode, setMode] = useState(1)
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-12">
            <Title
              id={id}
              h="h2"
              label={`${t(title)}`}
              iconmap={iconmap}
            ></Title>
          </div>
          <div className="col-3 d-none d-lg-block text-end">
            <div className="btn-group">
              <Button
                className={`btn btn-outline-secondary ${
                  mode === 0 ? 'active' : ''
                }`}
                iconmap={IconMap.List}
                onClick={() => setMode(0)}
              ></Button>
              <Button
                className={`btn btn-outline-secondary ${
                  mode === 1 ? 'active' : ''
                }`}
                iconmap={IconMap.Grid}
                onClick={() => setMode(1)}
              />
            </div>
          </div>
        </div>
      </div>
      {mode === 0 ? (
        <div className="container-fluid mb-5">
          <div className="row">
            {/* <div className="col"> */}
            {(
              i18n.t(entry, {
                returnObjects: true,
                defaultValue: [],
              }) as AcademicEntry[]
            ).map((academicItem: AcademicEntry, academicIndex) => (
              <>
                <AcademicItem
                  key={`academic-item-${academicIndex}`}
                  academicItem={academicItem}
                  academicIndex={academicIndex}
                  mode={mode}
                  titleIcon={titleIcon}
                  entityIcon={entityIcon}
                  leftLinkIcon={leftLinkIcon}
                  leftLinkLabel={leftLinkLabel}
                  rightLinkIcon={rightLinkIcon}
                  rightLinkLabel={rightLinkLabel}
                />
              </>
            ))}
            {/* </div> */}
          </div>
        </div>
      ) : (
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="row mb-2">
              <div className="col">
                <div className="row row-cols-4">
                  {(
                    i18n.t(entry, {
                      returnObjects: true,
                      defaultValue: [],
                    }) as AcademicEntry[]
                  ).map((academicItem: AcademicEntry, academicIndex) => (
                    <AcademicItem
                      key={`academic-item-${academicIndex}`}
                      academicItem={academicItem}
                      academicIndex={academicIndex}
                      mode={mode}
                      leftLinkIcon={leftLinkIcon}
                      leftLinkLabel={leftLinkLabel}
                      rightLinkIcon={rightLinkIcon}
                      rightLinkLabel={rightLinkLabel}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
