import React, { useState, useEffect } from 'react'
import { PageLayout } from '@components/layout/PageLayout'

// const TODO_API_URL = 'https://coruscating-sable-0b4705.netlify.app/api/todos'
const TODO_API_URL = 'http://localhost:3000/api/todos'

export const RestApi = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getEntries()
  }, [])

  const getEntries = () => {
    fetch(TODO_API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('Equal?', JSON.stringify(todos) === JSON.stringify(data))
        if (JSON.stringify(todos) !== JSON.stringify(data)) {
          setTodos(data)
        } else {
          console.log('Nothing to do')
        }
        return
      })
  }

  const addEntry = () => {
    fetch(TODO_API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: 'Chocoloco' }),
    })
      .then((response) => response.json())
      .then(() => getEntries())
  }

  return (
    <PageLayout subnavbar={true}>
      <div className="container-fluid mb-5">
        <button onClick={addEntry}>Aha</button>
        <hr />
        {todos.map((todo: any) => (
          <p>
            {todo.id} | {todo.name} | {todo.creationDate} |{' '}
            {todo.modificationDate}
          </p>
        ))}
      </div>
    </PageLayout>
  )
}
