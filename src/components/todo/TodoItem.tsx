import { Icon, IconMap } from '../widgets/Icon'
import { Button } from '../widgets/Button'
import { Modal } from '../widgets/Modal'

interface Props {
  todo: string
  index: number
  remove: Function
}

export const TodoItem = ({ todo, index, remove }: Props) => {
  return (
    <>
      <tr>
        <td className="align-middle flex-nowrap text-truncate pe-5 text-end">
          <Icon iconmap={IconMap.Task} />
          <span className="opacity-25">{`#${index}`}</span>
        </td>
        <td className="w-100 align-middle">{todo}</td>
        <td>
          <Button
            className="btn text-danger"
            iconmap={IconMap.TaskRemove}
            onClick={remove}
          />
        </td>
      </tr>
    </>
  )
}
