import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/')({
  component: () => <div>Hello /_base/!</div>
})
