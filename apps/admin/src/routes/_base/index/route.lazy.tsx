import { useSuspenseQueries } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { profileQO, usersQO } from '@/features/users'

dayjs.extend(customParseFormat)

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

      {(userlist as any).records.map((user: any) => (
        <Card key={user.id}>
          <h1>username: {user.username}</h1>
          <h1>nickname: {user.nickName}</h1>
          <Avatar src={user.avatarUrl} />
          <DatePicker
            value={dayjs(user.birthDate).isValid() ? dayjs(user.birthDate) : null}
            minDate={dayjs('1900-01-01')}
            maxDate={dayjs()}
          />
          {user.birthDate}
        </Card>
      ))}
    </Skeleton>
  )
}
