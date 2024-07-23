export const Route = createFileRoute('/_public')({
  beforeLoad: () => {
    if (AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/',
        replace: true
      })
    }
  }
})
