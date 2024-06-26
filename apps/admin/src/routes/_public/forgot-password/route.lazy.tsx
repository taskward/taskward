import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/forgot-password')({
  component: () => <div>Hello /_public/forgot-password!</div>
})
