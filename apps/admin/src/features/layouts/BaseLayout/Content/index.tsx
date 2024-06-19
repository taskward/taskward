import { Avatar } from 'antd'
import { useEffect, useState } from 'react'

interface UserVo {
  id: number
  username: string
  nickName: string
  password: string
  phoneNumber: string
  email: string
  firstName: string
  middleName: string
  lastName: string
  avatarUrl: string
  gender: string
  contry: string
  province: string
  city: string
  address: string
  biography: string
  website: string
  profile: string
  birthDate: string
  enabled: boolean
  authFlag: boolean
  createdAt: string
  createdBy: number
  updatedAt: string
  updatedBy: number
}

export default function Content() {
  const [users, setUsers] = useState<UserVo[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADMIN_BASE_API_PREFIX}/users`)
      .then((res) => res.json())
      .then((res) => setUsers(res))
  }, [])

  return (
    <div className="mx-4 ml-0 grow bg-slate-400 p-4 dark:bg-gray-600">
      Content
      <div>
        <Avatar.Group
          size="large"
          max={{
            count: 2,
            style: { color: '#f56a00', backgroundColor: '#fde3cf' }
          }}
        >
          {users.map((user) => (
            <Avatar
              key={user.id}
              src={user.avatarUrl}
            />
          ))}
          <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
            style={{ backgroundColor: 'blue' }}
          />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
        </Avatar.Group>
      </div>
    </div>
  )
}
