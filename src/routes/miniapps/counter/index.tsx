import { useState } from 'react'
import { Button } from '@/components/widgets/Button'
import { Input } from '@/components/widgets/Input'
import { IconMap } from '@/components/widgets/Icon'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  clear,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '@app/reducer/counter.slice'

import { PageLayout } from '@/components/layout/PageLayout'

const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const localIncrementAsync = (incrementValue: number) => {
    return dispatch(incrementAsync(incrementValue))
  }

  const incrementerControls = () => {
    return (
      <div className="btn-group w-100">
        <Button
          iconmap={IconMap.CircleMinus}
          label="app:counter:decrement"
          className="btn-outline-danger"
          onClick={() => dispatch(decrement())}
        />
        <Button
          iconmap={IconMap.CirclePlus}
          label="app:counter:increment"
          className="btn btn-outline-success"
          onClick={() => dispatch(increment())}
        />
      </div>
    )
  }

  const clearControl = () => {
    return (
      <Button
        iconmap={IconMap.CircleX}
        label="app:counter:clear"
        className="btn-outline-warning w-100"
        onClick={() => dispatch(clear())}
      />
    )
  }

  const amountControl = () => {
    return (
      <Input
        type="number"
        className="form-control float-end"
        aria-label="Amount"
        value={incrementAmount}
        onChange={setIncrementAmount}
      />
    )
  }

  const adderControls = () => {
    return (
      <div className="btn-group w-100">
        <Button
          iconmap={IconMap.CirclePlus}
          className="btn-outline-success w-100 text-truncate"
          label="app:counter:addSync"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        />
        <Button
          name="app-async-navbar-button"
          iconmap={IconMap.CirclePlus}
          className="btn-outline-primary w-100 text-truncate"
          label="app:counter:addAsync"
          async={true}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        />
        <Button
          iconmap={IconMap.CirclePlus}
          className="btn-outline-info w-100 text-truncate"
          label="app:counter:addIfOdd"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        />
      </div>
    )
  }

  const toolbar = (
    <>
      <li className="nav-item">{incrementerControls()}</li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">{clearControl()}</li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">{amountControl()}</li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">{adderControls()}</li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text-center app-counter" style={{ fontSize: 160 }}>
              {count}
            </h1>
          </div>
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col mb-3">{incrementerControls()}</div>
                <div className="col">{clearControl()}</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12 col-lg-6">{amountControl()}</div>
                <div className="col-md-12 col-lg-6">{adderControls()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Counter
