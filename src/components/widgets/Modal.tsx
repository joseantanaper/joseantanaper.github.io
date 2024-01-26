import React from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button, ButtonToggler } from '@components/widgets/Button'
import { Trans } from 'react-i18next'

interface Props {
  id: string
  title: string
  content: string
  confirm: Function
  bsColor?: 'primary' | 'success' | 'danger'
}

export const Modal = ({
  id,
  title,
  content,
  confirm,
  bsColor = 'danger',
}: Props) => {
  return (
    <>
      <div
        id={id}
        className="modal fade"
        tabIndex={-1}
        aria-labelledby={`${id}-label`}
        aria-hidden="true"
        data-bs-backdrop="true"
      >
        <button
          type="button"
          className="invisible"
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
        />
        <div className="modal-dialog shadow">
          <div className="modal-content">
            <div className={`modal-header bg-${bsColor} text-light`}>
              <h1
                className="modal-title d-flex align-items-center fs-5"
                id={`${id}-label`}
              >
                <Icon iconmap={IconMap.Question} />
                <span>
                  <Trans>{title}</Trans>
                </span>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <Trans>{content}</Trans>
            </div>
            <div className="modal-footer">
              <ButtonToggler
                className="btn btn-outline-secondary"
                iconmap={IconMap.Cancel}
                targetId={id}
                toggle="modal"
                label="app:no"
              />

              <Button
                className={`btn btn-${bsColor}`}
                iconmap={IconMap.Check}
                onClick={() => confirm()}
                label="app:confirm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
