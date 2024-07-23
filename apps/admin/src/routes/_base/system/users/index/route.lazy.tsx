export const Route = createLazyFileRoute('/_base/system/users/')({
  component: Page
})

function Page() {
  return (
    <PageContainer>
      <Link
        to="/system/users/$id"
        params={{ id: '123' }}
      >
        User Detail
      </Link>
      <BasicTable />
    </PageContainer>
  )
}
