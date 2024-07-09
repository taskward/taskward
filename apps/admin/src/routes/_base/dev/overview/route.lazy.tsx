import { useSuspenseQueries } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { profileQO, usersQO } from '@/features/users'
import { dependencies, devDependencies } from '~build/package'

dayjs.extend(customParseFormat)

export const Route = createLazyFileRoute('/_base/dev/overview')({
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
      项目依赖情况:
      {Object.keys(dependencies).map((d) => (
        <div key={d}>
          {d}: {dependencies[d]}
        </div>
      ))}
      开发依赖情况:
      {Object.keys(devDependencies).map((d) => (
        <div key={d}>
          {d}: {devDependencies[d]}
        </div>
      ))}
    </Skeleton>
  )
}
