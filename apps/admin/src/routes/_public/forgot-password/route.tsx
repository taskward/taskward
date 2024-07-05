import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/forgot-password')({
  staticData: {
    title: '忘记密码'
  }
})
