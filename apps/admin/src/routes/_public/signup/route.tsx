import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/signup')({
  staticData: {
    title: '注册'
  }
})
