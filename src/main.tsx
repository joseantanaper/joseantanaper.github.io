import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import '@style/bootstrap.scss'
import '@bootstrap-js'
import Root from '@routes/Root'
import Error from '@routes/Error'

import { routes } from './config/routes/routes'

import {
  // BrowserRouterProps,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import '@config/i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: routes,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  </React.StrictMode>
)
