import { useState } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '@app/reducer/counter.slice'

// interface Props {
//   id: string
//   iconId: string
//   type?: string
//   css?: string
// }

export const MiniCounter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const handleClick = () => {
    console.log('MiniCounter!')
  }

  return (
    <div className="btn-group" role="group">
      <Button
        className="btn-outline-secondary"
        onClick={() => dispatch(decrement())}
        iconmap={IconMap.CircleMinus}
      />
      <label className="btn btn-outline-primary z-1">{count}</label>
      <Button
        className="btn-outline-success"
        onClick={() => dispatch(increment())}
        iconmap={IconMap.CirclePlus}
      />
    </div>
  )
}
