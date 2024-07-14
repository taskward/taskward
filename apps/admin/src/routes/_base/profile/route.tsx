import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/profile')({
  staticData: {
    title: 'Profile'
  }
})
