export const Route = createFileRoute('/$')({
  beforeLoad: () => {
    throw redirect({
      to: '/404'
    })
  }
})
