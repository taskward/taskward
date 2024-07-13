export default function MenuVisibilityToggle() {
  const { t } = useTranslation()
  const sidebarStore = useSidebarStore()

  return (
    <Tooltip
      title={sidebarStore.isDisplay ? t('HIDE.SIDEBAR') : t('SHOW.SIDEBAR')}
      placement="bottom"
    >
      <div
        onClick={sidebarStore.toggleDisplay}
        className="cursor-pointer text-lg"
      >
        {sidebarStore.isDisplay ? <LineMdMenuFoldLeft /> : <LineMdMenuFoldRight />}
      </div>
    </Tooltip>
  )
}
