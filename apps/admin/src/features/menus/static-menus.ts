import type { MenuProps } from 'antd'

export const staticMenus: MenuProps['items'] = [
  { label: 'Dashboard', key: '/', icon: '' },
  {
    label: 'System Management',
    key: '/system',
    icon: '',
    children: [{ label: 'User Management', key: '/system/users', icon: '' }]
  },
  {
    label: 'Dev',
    key: '/profile',
    icon: '',
    children: [
      { label: 'Overview', key: '/dev/overview', icon: '' },
      { label: 'Charts', key: '/dev/charts', icon: '' }
    ]
  }
]
