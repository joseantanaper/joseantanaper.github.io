import { useState } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { selectTheme, selectBtnTheme } from '@app/reducer/app.slice'
import { decrement, increment, selectCount } from '@app/reducer/counter.slice'
import { buttonStyle } from '@/util/styleTools'

// interface Props {
//   id: string
//   iconId: string
//   type?: string
//   css?: string
// }

export const MiniCounter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectTheme)
  const currentBtnTheme = useAppSelector(selectBtnTheme)
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const handleClick = () => {
    console.log('MiniCounter!')
  }

  return (
    <div className="btn-group" role="group">
      <Button
        className={buttonStyle(
          currentTheme,
          currentBtnTheme,
          'info',
          'success',
          'danger'
        )}
        onClick={() => dispatch(decrement())}
        iconmap={IconMap.CircleMinus}
      />
      <label
        className={`btn z-1 ${buttonStyle(
          currentTheme,
          currentBtnTheme,
          'secondary',
          'warning',
          'primary'
        )}`}
        style={{ minWidth: '3rem', width: '3rem' }}
      >
        {count}
      </label>
      <Button
        className={buttonStyle(
          currentTheme,
          currentBtnTheme,
          'primary',
          'danger',
          'success'
        )}
        onClick={() => dispatch(increment())}
        iconmap={IconMap.CirclePlus}
      />
    </div>
  )
}
