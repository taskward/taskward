import type { EChartsInitOpts, EChartsOption } from 'echarts'
import type { CSSProperties } from 'react'

import type { EChartsInstance } from '@/shared/charts'

interface ReactChartProps {
  option?: EChartsOption
  initOptions?: EChartsInitOpts
  className?: string
  style?: CSSProperties
}

export default function ReactChart(props: ReactChartProps) {
  const { option = {}, initOptions, className, style } = props

  const themeStore = useThemeStore()

  const [chart, setChart] = useState<EChartsInstance | null>(null)
  const chartRef = useRef<HTMLDivElement | null>(null)

  const resize = useCallback(
    () =>
      chart?.resize({
        animation: {
          duration: 3000,
          easing: 'cubicIn'
        }
      }),
    [chart]
  )

  const setOption = useCallback(() => chart?.setOption(option), [chart, option])

  /**
   * When the following properties change, the chart will be re-rendered, but before that, the chart will be disposed first.
   * - initOptions
   * - theme
   */
  useLayoutEffect(() => {
    const init = () => {
      const alreadyInit = echarts.getInstanceByDom(chartRef.current!)
      if (!alreadyInit) {
        const chartInstance = echarts.init(chartRef.current!, themeStore.theme, {
          renderer: 'svg',
          ...initOptions
        })
        setChart(chartInstance)
        setOption()
      }
    }
    init()
    return () => chart?.dispose()
  }, [chart, initOptions, setOption, themeStore.theme])

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [resize])

  useEffect(() => {
    setOption()
    resize()
  }, [setOption, resize])

  const divProps = useMemo(
    () => ({
      className,
      style
    }),
    [className, style]
  )

  return (
    <div
      ref={chartRef}
      {...divProps}
    />
  )
}
