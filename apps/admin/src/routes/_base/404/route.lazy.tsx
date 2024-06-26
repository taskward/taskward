import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/404')({
  component: () => (
    <ErrorPage
      title="404 页面未找到"
      subTitle="请联系系统管理员"
    />
  )
})
