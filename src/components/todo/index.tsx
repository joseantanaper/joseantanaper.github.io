import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { Modal } from '@components/widgets/Modal'
import { useTranslation } from 'react-i18next'
import { Icon, IconMap } from '@components/widgets/Icon'
import { TodoItem } from './TodoItem'

interface Props {
  todos: string[]
  search?: string
  add: Function
  remove: Function
}

export const TodoList = ({ todos, search, remove }: Props) => {
  const [currentTodo, setCurrentTodo] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([...todos])
  const { t } = useTranslation()

  const confirmRemove = (todo: string) => {
    setCurrentTodo(todo)
    ;(
      document
        .getElementById('todoRemoveConfirm')
        ?.getElementsByTagName('button')[0] as HTMLButtonElement
    ).click()
  }

  const taskRemove = () => {
    console.log(currentTodo)
    remove(currentTodo)
    ;(
      document
        .getElementById('todoRemoveConfirm')
        ?.getElementsByTagName('button')[1] as HTMLButtonElement
    ).click()
  }

  const TodoResume = () => {
    return (
      <div className="btn-group float-end">
        <span className="btn btn-outline-secondary disabled text-body">
          {t('app:todo:tasks')}
        </span>
        <span className="btn btn-outline-secondary disabled text-primary">
          <Icon iconmap={IconMap.Search} />
          {search ? (
            <>
              <span>{search}</span>
            </>
          ) : null}
        </span>
        <span className="btn btn-outline-secondary disabled text-body">
          {filteredTodos.length} / {todos.length}
        </span>
      </div>
    )
  }

  useEffect(() => {
    console.log('TodoList', 'useEffect')
  }, [])

  useEffect(() => {
    console.log('TodoList', 'useEffect', 'search', search)
    if (search) {
      setFilteredTodos(
        [...todos].filter((todo: string) =>
          todo.toUpperCase().includes(String(search.toUpperCase()))
        )
      )
    } else {
      setFilteredTodos([...todos])
    }
  }, [search, todos])

  useEffect(() => {
    console.log('TodoList', 'useEffect', 'todos')
    if (todos) {
      setFilteredTodos([...todos])
    } else {
      setFilteredTodos([])
    }
  }, [todos])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-hover">
              <tbody>
                {filteredTodos.length > 0 &&
                  filteredTodos.map((todo: string, index: number) => {
                    return (
                      <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        remove={() => confirmRemove(todo)}
                      />
                    )
                  })}
              </tbody>
            </table>
            {TodoResume()}
          </div>
        </div>
      </div>
      <Modal
        id="todoRemoveConfirm"
        title="Remove"
        content="This will remove this tasks. Continue?"
        confirm={taskRemove}
      />
    </>
  )
}
