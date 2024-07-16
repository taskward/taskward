export default function Mask() {
  const sidebarStore = useSidebarStore()
  return (
    <div
      className={clsx(
        'fixed inset-0 z-[75] bg-black opacity-40 sm:hidden dark:opacity-60',
        sidebarStore.isDisplay ? 'block' : 'hidden'
      )}
      onClick={sidebarStore.toggleDisplay}
    />
  )
}
