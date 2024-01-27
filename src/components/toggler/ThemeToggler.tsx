import { Icon, IconMap } from '@components/widgets/Icon'
import { Button } from '@components/widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { Theme, setTheme } from '@app/reducer/app.slice'
import { RootState } from '@app/store'

export const enum TogglerType {
  Button = 0,
  ButtonSelector = 1,
  Selector = 2,
}

export const enum Label {
  No = 0,
  Yes = 1,
}

interface Props {
  currentTheme?: Theme
  togglerType?: TogglerType
  label?: Label
}

export const ThemeToggler = ({
  currentTheme,
  togglerType = TogglerType.Button,
  label = Label.No,
}: Props) => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((state: RootState) => state.app)

  // document.documentElement.setAttribute('data-bs-theme', currentTheme as Theme)

  const handleClick = (theme?: Theme) => {
    const newTheme: Theme =
      theme !== undefined
        ? theme
        : document.documentElement.getAttribute('data-bs-theme') !== Theme.Dark
        ? Theme.Dark
        : Theme.Light
    console.log(newTheme)
    dispatch(setTheme(newTheme))
  }

  return (
    <>
      {togglerType === TogglerType.Button && (
        <Button onClick={() => handleClick()} extraClass="app-rotate">
          <Icon
            iconmap={IconMap.ThemeLight}
            extra="app-rotate"
            style={{ display: theme !== Theme.Dark ? 'none' : 'inline' }}
          />
          <Icon
            iconmap={IconMap.ThemeDark}
            extra="app-rotate"
            style={{ display: theme !== Theme.Dark ? 'inline' : 'none' }}
          />
        </Button>
      )}

      {togglerType === TogglerType.ButtonSelector && (
        <div className="btn-group float-end">
          <Button
            className={`btn ${
              currentTheme === Theme.Light ? 'disabled active' : ''
            }`}
            onClick={() => handleClick(Theme.Light)}
          >
            <Icon iconmap={IconMap.ThemeLight} extra="app-rotate" />
            {label === Label.Yes && (
              <span className="text-capitalize">{Theme.Light}</span>
            )}
          </Button>
          <Button
            className={`btn ${
              currentTheme === Theme.Dark ? 'disabled active' : ''
            }`}
            onClick={() => handleClick(Theme.Dark)}
          >
            <Icon iconmap={IconMap.ThemeDark} extra="app-rotate" />
            {label === Label.Yes && (
              <span className="text-capitalize">{Theme.Dark}</span>
            )}
          </Button>
        </div>
      )}
    </>
  )
}
