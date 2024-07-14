import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/change-password')({
  staticData: {
    title: 'Change Password'
  }
})
