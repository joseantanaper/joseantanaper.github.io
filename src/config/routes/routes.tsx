import Index from '@/routes/Index'
import Portfolio from '@/routes/portfolio'
import Creation from '@/routes/creation'
import Counter from '@/routes/miniapps/counter'
import Todo from '@/routes/miniapps/todo'
import { IconMap } from '@/components/widgets/Icon'
import { Lorem } from '@/routes/playground/lorem'

export const enum routePath {
  HOME = '/',
  PORTFOLIO = '/portfolio',
  CREATION = '/creation',
  TODO = '/miniapps/todo',
  COUNTER = '/miniapps/counter',
  LOREM = '/playground/lorem',
}
export const routes = [
  {
    path: '/',
    element: <Index />,
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

const getRouteByPath = (path: string): RouteLink => {
  return {
    ...routes.filter((route) => route.path === path)[0].loader(),
    url: path,
  }
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
}

export const routeLinks: RouteLink[] = [
  getRouteByPath(routePath.HOME),
  getRouteByPath(routePath.PORTFOLIO),
  getRouteByPath(routePath.CREATION),
  getRouteByPath(routePath.TODO),
  getRouteByPath(routePath.COUNTER),
  {
    url: '#0',
    title: 'Playground',
    iconmap: IconMap.Folder,
    items: [
      { ...getRouteByPath(routePath.LOREM), title: 'Lorem Ipsum' },
      { ...getRouteByPath(routePath.TODO), title: 'ToDo with title changed' },
    ],
  },
  {
    url: '#1',
    title: 'More',
    iconmap: IconMap.Folder,
    items: [
      { ...getRouteByPath(routePath.TODO), title: 'ToDo with title changed' },

      {
        ...getRouteByPath(routePath.COUNTER),
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
