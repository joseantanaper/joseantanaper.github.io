import { useState } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button, ButtonSplit } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { selectTheme, selectBtnTheme } from '@app/reducer/app.slice'
import { useTranslation } from 'react-i18next'

import {
  setClockMode,
  selectClockMode,
  ClockMode,
} from '@app/reducer/app.slice'

import { buttonStyle } from '@/util/styleTools'

interface Props {
  currentClockMode: ClockMode
}

export const Clock = ({ currentClockMode }: Props) => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectTheme)
  const currentBtnTheme = useAppSelector(selectBtnTheme)
  const { t, i18n } = useTranslation()

  const [, /* clockMode */ applyClockMode] = useState(
    useAppSelector(selectClockMode)
  )
  const tick = () => {
    const today = new Date()
    let h = String(today.getHours())
    let m = String(today.getMinutes())
    let s = String(today.getSeconds())
    m = String((Number(m) < 10 ? '0' : '') + m)
    s = String((Number(s) < 10 ? '0' : '') + s)
    return h + ':' + m + ':' + s
  }

  const [time, setTime] = useState(tick())

  const handleClick = (clockMode: ClockMode) => {
    dispatch(
      setClockMode(
        clockMode
          ? clockMode
          : currentClockMode === ClockMode.Long
          ? ClockMode.Short
          : ClockMode.Long
      )
    )
  }

  /* const interval = */ setInterval(() => {
    setTime(tick())
  }, 1000)

  const clock = time.substring(0, time.indexOf(':'))

  const btnTheme = ''

  const dropdownMenu = (
    <>
      <li>
        <h6 className="bg-gradient dropdown-header">{t('Clock')}</h6>
      </li>
      <li className="nav-item">
        <Button
          className="dropdown-item"
          iconmap={IconMap.Clock}
          onClick={() => handleClick(ClockMode.Short)}
          label="hh:mm"
        ></Button>
      </li>
      <li className="nav-item">
        <Button
          className="dropdown-item"
          iconmap={IconMap.Clock}
          onClick={() => handleClick(ClockMode.Long)}
          label="hh:mm:ss"
        ></Button>
      </li>
    </>
  )

  return (
    <>
      <ButtonSplit
        className={buttonStyle(currentTheme, currentBtnTheme, btnTheme)}
        iconmap={IconMap.Locale}
        dropdown={dropdownMenu}
      >
        <Button
          name="app-clock"
          className={buttonStyle(currentTheme, currentBtnTheme, btnTheme)}
          onClick={handleClick}
        >
          <Icon iconmap={IconMap.Clock} extra="app-rotate opacity-25" />
          <span className="text-danger ms-2 fw-light d-inline-block app-clock">
            <span
              style={{
                position: 'relative',
                top: '2px',
              }}
            >
              <span>{time.substring(0, time.indexOf(':'))}</span>
              <span className="opacity-75" style={{ margin: '-2px' }}>
                :
              </span>
              <span>
                {time.substring(time.indexOf(':') + 1, time.indexOf(':') + 3)}
              </span>
              <span className="opacity-75" style={{ margin: '-2px' }}>
                {currentClockMode === ClockMode.Long ? ':' : null}
              </span>
              <span>
                {currentClockMode === ClockMode.Long
                  ? time.substring(time.indexOf(':') + 4, time.indexOf(':') + 6)
                  : null}
              </span>
            </span>
          </span>
        </Button>
      </ButtonSplit>
    </>
  )
}
