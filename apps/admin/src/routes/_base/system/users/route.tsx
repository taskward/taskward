import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: 'User Management'
  }
})
