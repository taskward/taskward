import { createBrowserRouter } from 'react-router-dom'

import App from '@/app'
import Login from '@/app/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/login',
    Component: Login
  }
])
