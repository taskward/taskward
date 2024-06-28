import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import axios from 'axios'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

interface R<T> {
  msg: string
  data: T
}

interface UserVo {
  username: string
  nickName: string
  avatarUrl: string
}

interface TokensVo {
  accessToken: string
  refreshToken: string
}

const requestQueue: any[] = []

function Page() {
  const [enabled, setEnabled] = useState(!!localStorage.getItem('accessToken'))
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: () =>
      axios.get<R<UserVo>>('/base-api/users/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }),
    select: (d) => d?.data,
    enabled,
    staleTime: 1000
  })

  useEffect(() => {
    axios.interceptors.response.use(
      (res) => res,
      async (err) => {
        switch (err.response?.status) {
          case 401:
            requestQueue.push(err.config)
            try {
              const { accessToken, refreshToken } = (
                await axios.post<R<TokensVo>>(
                  '/base-api/auth/refresh',
                  {},
                  {
                    params: { token: localStorage.getItem('refreshToken') }
                  }
                )
              ).data.data
              localStorage.setItem('accessToken', accessToken)
              localStorage.setItem('refreshToken', refreshToken)
              setEnabled(true)
              requestQueue.forEach((config) => {
                config.headers.Authorization = `Bearer ${accessToken}`
                axios.request(config)
              })
              requestQueue.length = 0
            } catch (e) {
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
              setEnabled(false)
              router.navigate({
                to: '/login',
                replace: true
              })
            }

            break
          default:
            break
        }
        return Promise.reject(err)
      }
    )
  })

  return (
    <Skeleton loading={isLoading}>
      <div onClick={() => refetch()}>
        <h1>username: {data?.data.username}</h1>
        <h1>nickname: {data?.data.nickName}</h1>
        <Avatar src={data?.data.avatarUrl} />
      </div>
    </Skeleton>
  )
}
