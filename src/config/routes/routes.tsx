import Home from '@/routes/Home'
import Portfolio from '@routes/portfolio/Index'
import Creation from '@routes/creation/Index'
import Counter from '@routes/miniapps/counter'
import Todo from '@routes/miniapps/todo'
import { IconMap } from '@components/widgets/Icon'
import { Lorem } from '@routes/playground/lorem'
import { Navigate } from 'react-router-dom'

export const enum routePath {
  HOME = '',
  PORTFOLIO = 'portfolio',
  CREATION = 'creation',
  TODO = 'miniapps/todo',
  COUNTER = 'miniapps/counter',
  LOREM = 'playground/lorem',
}

export interface RouteLink {
  // id?: string
  url: string
  title: string
  subtitle?: string
  description?: string
  iconmap: IconMap
  items?: RouteLink[]
  parent?: RouteLink
  isGroup?: boolean
  loader?: any
  ttitle?: string
  tsubtitle?: string
  tdescription?: string
}

const getRouteLinkByPath = (path: string): RouteLink => {
  const route: RouteLink = {
    ...(routes.filter((route) => route.path === path)[0].loader() as RouteLink),
    url: path,
  }
  return route
}

export const routeLinkIsGroup = (url: string) => {
  return url.startsWith('#')
}

export const routes = [
  {
    index: true,
    path: routePath.HOME,
    element: <Home />,
    loader: () => {
      return {
        title: 'app:home:title',
        subtitle: 'app:home:subtitle',
        description: 'app:home:description',
        iconmap: IconMap.Home,
      }
    },
  },
  {
    path: routePath.PORTFOLIO,
    element: <Portfolio />,
    loader: () => {
      return {
        title: 'app:portfolio:title',
        subtitle: 'app:portfolio:subtitle',
        description: 'app:portfolio:description',
        iconmap: IconMap.Portfolio,
      }
    },
  },
  {
    path: routePath.CREATION,
    element: <Creation />,
    loader: () => {
      return {
        title: 'app:creation:title',
        subtitle: 'app:creation:subtitle',
        description: 'app:creation:description',
        iconmap: IconMap.Hobbies,
      }
    },
  },
  {
    path: routePath.COUNTER,
    element: <Counter />,
    loader: () => {
      return {
        title: 'app:counter:title',
        subtitle: 'app:counter:subtitle',
        description: 'app:counter:description',
        iconmap: IconMap.Counter,
      }
    },
  },
  {
    path: routePath.TODO,
    element: <Todo />,
    loader: () => {
      return {
        title: 'app:todo:title',
        subtitle: 'app:todo:subtitle',
        description: 'app:todo:description',
        iconmap: IconMap.Task,
      }
    },
  },
  {
    path: routePath.LOREM,
    element: <Lorem />,
    loader: () => {
      return {
        title: 'app:playground:lorem:loremTitle',
        subtitle: 'app:playground:lorem:loremSubtitle',
        description: 'app:playground:lorem:loremDescription',
        iconmap: IconMap.Locale,
      }
    },
  },
]

export const _routes = [
  {
    path: '/',
    element: <Home />,
    loader: () => {
      return {
        title: 'app:home:title',
        subtitle: 'app:home:subtitle',
        description: 'app:home:description',
        iconmap: IconMap.Home,
      }
    },
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    loader: () => {
      return {
        title: 'app:portfolio:title',
        subtitle: 'app:portfolio:subtitle',
        description: 'app:portfolio:description',
        iconmap: IconMap.Portfolio,
      }
    },
  },
  {
    path: '/creation',
    element: <Creation />,
    loader: () => {
      return {
        title: 'app:creation:title',
        subtitle: 'app:creation:subtitle',
        description: 'app:creation:description',
        iconmap: IconMap.Hobbies,
      }
    },
  },
  {
    path: '/miniapps/counter',
    element: <Counter />,
    loader: () => {
      return {
        title: 'app:counter:title',
        subtitle: 'app:counter:subtitle',
        description: 'app:counter:description',
        iconmap: IconMap.Counter,
      }
    },
  },
  {
    path: '/miniapps/todo',
    element: <Todo />,
    loader: () => {
      return {
        title: 'app:todo:title',
        subtitle: 'app:todo:subtitle',
        description: 'app:todo:description',
        iconmap: IconMap.Task,
      }
    },
  },
  {
    path: '/playground/lorem',
    element: <Lorem />,
    loader: () => {
      return {
        title: 'app:playground:lorem:loremTitle',
        subtitle: 'app:playground:lorem:loremSubtitle',
        description: 'app:playground:lorem:loremDescription',
        iconmap: IconMap.Locale,
      }
    },
  },
]

export const routeLinks: RouteLink[] = [
  getRouteLinkByPath(routePath.HOME),
  getRouteLinkByPath(routePath.PORTFOLIO),
  getRouteLinkByPath(routePath.CREATION),
  getRouteLinkByPath(routePath.TODO),
  getRouteLinkByPath(routePath.COUNTER),
  {
    url: '#0',
    title: 'Playground',
    iconmap: IconMap.Folder,
    items: [
      { ...getRouteLinkByPath(routePath.LOREM), title: 'Lorem Ipsum' },
      {
        ...getRouteLinkByPath(routePath.TODO),
        title: 'ToDo with title changed',
      },
    ],
  },
  {
    url: '#1',
    title: 'More',
    iconmap: IconMap.Folder,
    items: [
      {
        ...getRouteLinkByPath(routePath.TODO),
        title: 'ToDo with title changed',
      },

      {
        ...getRouteLinkByPath(routePath.COUNTER),
        title: 'Counter with title updated',
      },
    ],
  },
]

export const moreLinks = [
  {
    url: 'https://www.linkedin.com/in/josean/',
    title: 'LinkedIn',
    iconmap: IconMap.Portfolio,
  },
  {
    url: 'https://github.com/joseantanaper/',
    title: 'GitHub',
    iconmap: IconMap.GitHub,
  },
  {
    url: 'https://gitlab.com/joseantanaper',
    title: 'GitLab',
    iconmap: IconMap.GitLab,
  },
  {
    url: 'https://www.youtube.com/channel/UCJv0Ru8VQr5z_mvi6ZJKp4A/',
    title: 'YouTube',
    iconmap: IconMap.YouTube,
  },
]
