import type { MenuProps } from 'antd'

import { profileQO } from '@/features/users'

enum UserAction {
  'USER.INFO' = '1',
  'CHANGE.PASSWORD' = '2',
  'QUIT' = '3'
}

export default function UserAvatar() {
  const { t } = useTranslation()
  const router = useRouter()
  const navigate = useNavigate()
  const { message } = App.useApp()

  const queryClient = useQueryClient()
  const { data: profile } = useSuspenseQuery(profileQO())

  const menuItems: MenuProps['items'] = [
    {
      key: UserAction['USER.INFO'],
      label: t('PROFILE'),
      onMouseEnter: () => router.preloadRoute({ to: '/profile' })
    },
    {
      key: UserAction['CHANGE.PASSWORD'],
      label: t('CHANGE.PASSWORD'),
      onMouseEnter: () => router.preloadRoute({ to: '/change-password' })
    },
    {
      key: UserAction.QUIT,
      label: t('LOG.OUT'),
      onMouseEnter: () => router.preloadRoute({ to: '/login' })
    }
  ]

  const handleClickMenu: MenuProps['onClick'] = async ({ key }) => {
    switch (key) {
      case UserAction['USER.INFO']: {
        navigate({ to: '/profile' })
        break
      }
      case UserAction['CHANGE.PASSWORD']: {
        navigate({ to: '/change-password' })
        break
      }
      case UserAction.QUIT: {
        AuthUtils.clearAccessToken()
        AuthUtils.clearRefreshToken()
        AuthUtils.clearRememberedAccount()
        message.success(t('LOG.OUT.SUCCESS'))
        queryClient.removeQueries(profileQO())
        await navigate({ to: '/login', replace: true })
        queryClient.clear()
        router.history.flush()
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: handleClickMenu
      }}
    >
      {profile.avatarUrl ? (
        <Avatar
          src={profile.avatarUrl}
          size={36}
          className="cursor-pointer hover:shadow"
        />
      ) : (
        <Avatar
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${profile.username}`}
          size={36}
          className="cursor-pointer hover:shadow"
        />
      )}
    </Dropdown>
  )
}
