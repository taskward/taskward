import { useSuspenseQueries } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'

import { profileQO, usersQO } from '@/features/users'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

function Page() {
  const [{ data, isLoading, refetch }, { data: userlist }] = useSuspenseQueries({
    queries: [profileQO, usersQO]
  })

  return (
    <Skeleton loading={isLoading}>
      <div onClick={() => refetch()}>
        <h1>username: {data.username}</h1>
        <h1>nickname: {data.nickName}</h1>
        <Avatar src={data.avatarUrl} />
      </div>

      {userlist.map((user) => (
        <Card key={user.id}>
          <h1>username: {user.username}</h1>
          <h1>nickname: {user.nickName}</h1>
          <Avatar src={user.avatarUrl} />
        </Card>
      ))}
    </Skeleton>
  )
}
