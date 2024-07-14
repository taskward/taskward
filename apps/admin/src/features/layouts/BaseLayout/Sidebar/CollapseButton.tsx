export default function CollapseButton() {
  const sidebarStore = useSidebarStore()

  return (
    <div className="h-10 p-1">
      <div
        className="group flex size-full cursor-pointer items-center justify-center rounded-sm transition-[opacity,background] hover:bg-gray-200 active:opacity-75 dark:hover:bg-gray-600"
        onClick={sidebarStore.toggleCollapse}
      >
        <LineMdChevronSmallDoubleLeft
          className={clsx(
            'text-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-100',
            sidebarStore.isCollapse ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
    </div>
  )
}
