import { useState } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { RootState } from '@app/store'
import { Avataro } from '@/components/widgets/Avataro'
import { Input } from '@components/widgets/Input'

import { Trans } from 'react-i18next'

import {
  setUsername,
  selectUsername,
  clearUsername,
} from '@app/reducer/app.slice'

interface Props {
  id?: string
}

export const Login = ({ id }: Props) => {
  const dispatch = useAppDispatch()
  const [username, applyUsername] = useState('')
  const currentUsername = useAppSelector(selectUsername)

  const clearUsername = () => {
    dispatch(setUsername(''))
    applyUsername('')
  }

  return (
    <>
      <div className="container-fluid text-center">
        {/* Avatar */}
        <div className="row">
          <div className="col">
            {currentUsername ? (
              // <Avataro size="240px" />
              <Icon
                extra="text-success"
                iconmap={IconMap.Login}
                style={{ width: 180, height: 180 }}
              />
            ) : (
              <Icon
                extra="text-danger opacity-25"
                iconmap={IconMap.Logout}
                style={{ width: 180, height: 180 }}
              />
            )}
          </div>
        </div>

        {/* Message */}
        <div className="row">
          <div className="col">
            {currentUsername ? (
              <span>
                <Trans>Welcome</Trans>, <strong>{currentUsername}</strong>!
              </span>
            ) : (
              <span>
                <Trans>Please, Sign In</Trans>
              </span>
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="row mb-3">
          <div className="col"></div>
        </div>

        {/* Login Form */}
        <div className="row mb-3">
          <div className="col">
            {!currentUsername ? (
              <div className="input-group">
                <Input
                  type="text"
                  placeholder="Username"
                  aria-label="Username"
                  value={username}
                  onChange={applyUsername}
                />
                <Button
                  className="btn btn-outline-success"
                  disabled={!username}
                  onClick={() => dispatch(setUsername(username))}
                  iconmap={IconMap.Login}
                  label="Sign In"
                />
              </div>
            ) : (
              <Button
                className="btn btn-outline-danger"
                onClick={clearUsername}
                iconmap={IconMap.Logout}
                label="Sign Out"
              />
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="row mb-3">
          <div className="col"></div>
        </div>
      </div>
    </>
  )
}
