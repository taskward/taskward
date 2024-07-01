import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/forgot-password')({
  component: () => (
    <ErrorPage
      title="开发中"
      subTitle="🚀 该功能正在火速开发中"
    />
  )
})
