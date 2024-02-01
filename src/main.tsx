import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import '@style/bootstrap.scss'
import '@bootstrap-js'
import Root from '@routes/Root'
import Error from '@routes/Error'
import { IconMap } from '@components/widgets/Icon'
import { Navigate } from 'react-router-dom'

import { routes } from '@config/routes/routes'

import {
  // BrowserRouterProps,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import '@config/i18n'
import i18n from 'i18next'

const router = createBrowserRouter(
  [
    {
      path: '/',
      index: true,
      element: <Navigate to={`/${i18n.resolvedLanguage}`} />,
      // Root Redirect to default/stored language
    },
    {
      path: '/:lang',
      element: <Root />,
      errorElement: <Error />,
      loader: () => {
        return {
          title: 'app:home:title',
          subtitle: 'app:home:subtitle',
          description: 'app:home:description',
          iconmap: IconMap.None,
        }
      },
      children: routes,
    },
  ]
  // { basename: `/${i18n.language}` }
)

// export function InitSSR({ initialI18nStore, initialLanguage }) {
//   useSSR(initialI18nStore, initialLanguage)

//   return <App />
// }

const root = ReactDOM.createRoot(document.getElementById('root')!).render(
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
