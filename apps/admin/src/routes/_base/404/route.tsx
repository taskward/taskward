import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/404')({
  staticData: {
    title: '404'
  }
})
