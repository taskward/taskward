import { useFullscreen } from 'ahooks'

export default function FullScreenButton() {
  const { t } = useTranslation()
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body)

  return (
    <Tooltip
      title={isFullscreen ? t('EXIT.FULLSCREEN') : t('FULLSCREEN')}
      placement="bottom"
    >
      <div
        className="cursor-pointer text-lg"
        onClick={toggleFullscreen}
      >
        {isFullscreen ? <LucideShrink /> : <LucideExpand />}
      </div>
    </Tooltip>
  )
}
