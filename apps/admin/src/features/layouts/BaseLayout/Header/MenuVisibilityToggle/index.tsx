export default function MenuVisibilityToggle() {
  const sidebarStore = useSidebarStore()
  return (
    <Button onClick={sidebarStore.toggleDisplay}>{sidebarStore.isDisplay ? '折叠' : '展开'}</Button>
  )
}
