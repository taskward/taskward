export default function CollapseButton() {
  const sidebarStore = useSidebarStore()
  return (
    <Button onClick={sidebarStore.toggleCollapse}>
      {sidebarStore.isCollapse ? '展开' : '折叠'}
    </Button>
  )
}
