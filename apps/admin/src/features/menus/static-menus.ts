import type { MenuProps } from 'antd'
import { createElement } from 'react'

export const staticMenus: MenuProps['items'] = [
  { label: 'Dashboard', key: '/', icon: createElement(LucideGauge) },
  {
    label: 'System Management',
    key: '/system',
    icon: createElement(LucideCog),
    children: [
      { label: 'User Management', key: '/system/users', icon: createElement(LucideUserRoundCog) }
    ]
  },
  {
    label: 'Dev',
    key: '/profile',
    icon: createElement(LucideFolderCode),
    children: [
      { label: 'Overview', key: '/dev/overview', icon: '' },
      { label: 'Charts', key: '/dev/charts', icon: '' }
    ]
  }
]
