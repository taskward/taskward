export default function DocsButton() {
  const { t } = useTranslation()

  return (
    <Tooltip
      title={t('DOCS')}
      placement="bottom"
    >
      <div
        className="cursor-pointer text-lg"
        onClick={() => BrowserUtils.openNewWindow(appConfig.DOCS_URL)}
      >
        <LucideBookOpenText />
      </div>
    </Tooltip>
  )
}
