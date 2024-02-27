import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

import {
  addTodo,
  removeAll,
  selectTodos,
  remove,
} from '@app/reducer/todos.slice'

import { useTranslation } from 'react-i18next'

import { PageLayout } from '@components/layout/PageLayout'
import { Button } from '@components/widgets/Button'
import { Input } from '@components/widgets/Input'
import { TodoList } from '@components/todo'
import { Modal } from '@components/widgets/Modal'
import { IconMap } from '@components/widgets/Icon'

const Todo = () => {
  const { todos } = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState('')
  const [search, setSearch] = useState('')
  const { t } = useTranslation()

  const ClearSearch = () => {
    setSearch('')
  }

  const AddTodo = (todo: string) => {
    if (todo) {
      console.log('miniapps', 'ToDo', 'AddTodo', todo)
      dispatch(addTodo(todo))
      setTodo('')
    }
  }

  const Remove = (todo: string) => {
    console.log('miniapps', 'ToDo', 'Remove', todo)
    if (todo) {
      dispatch(remove(todo))
    }
  }

  const ConfirmRemoveAll = () => {
    ;(
      document
        .getElementById('todoRemoveAllConfirm')
        ?.getElementsByTagName('button')[0] as HTMLButtonElement
    ).click()
  }

  const RemoveAll = () => {
    // TODO: Close Modal with Javascript, NO with button click,.
    dispatch(removeAll())
    ;(
      document
        .getElementById('todoRemoveAllConfirm')
        ?.getElementsByTagName('button')[1] as HTMLButtonElement
    ).click()
  }

  const toolbar = (
    <>
      <li className="nav-item">
        {/* TODO: TextSearch component */}
        <div className="input-group w-100">
          <Input
            search={true}
            placeholder={t('app:todo:search')}
            value={search}
            onChange={setSearch}
            clear={ClearSearch}
          />
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        <div className="input-group d-flex flex-nowrap sm-w-100">
          <Input
            style={{ minWidth: '120px' }}
            value={todo}
            placeholder={t('app:todo:content')}
            onChange={setTodo}
          />
          <Button
            className="btn-outline-danger"
            disabled={!todo}
            onClick={() => setTodo('')}
            iconmap={IconMap.Backspace}
          />
          <Button
            className="btn-outline-primary"
            disabled={!todo}
            onClick={() => AddTodo(todo)}
            iconmap={IconMap.TaskPlus}
            label={t('app:add')}
          />
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        <Button
          className="btn-outline-danger w-100"
          disabled={todos.length <= 0}
          onClick={ConfirmRemoveAll}
          iconmap={IconMap.TaskRemove}
          label={t('app:todo:removeAll')}
        />
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <TodoList todos={todos} search={search} add={AddTodo} remove={Remove} />

      <Modal
        id="todoRemoveAllConfirm"
        title="app:todo:removeAll"
        content="app:todo:removeAllWarning"
        confirm={RemoveAll}
      />
    </PageLayout>
  )
}

export default Todo
