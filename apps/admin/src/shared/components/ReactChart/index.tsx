import type { EChartsInitOpts, EChartsOption } from 'echarts'
import type { CSSProperties } from 'react'

import type { EChartsInstance } from '@/shared/charts'

export interface ReactChartProps {
  option?: EChartsOption
  initOptions?: EChartsInitOpts
  className?: string
  style?: CSSProperties
}

export interface ReactChartRef {
  instance: EChartsInstance | null
  chartRef: HTMLDivElement | null
  resize: () => void
  setOption: () => void
}

/**
 * This component is a wrapper of echarts, which is used to render the chart in react.
 *
 * NOTE: Still have some problems need to be solved.
 * - The animation in resize option is required, otherwise the chart will not resize with animation.
 * - Warning: [Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive.
 * @see https://github.com/apache/echarts/issues/18255
 */
const ReactChart = forwardRef<ReactChartRef, ReactChartProps>((props, ref) => {
  const { option, initOptions, className, style } = props

  const themeStore = useThemeStore()

  const chartInstance = useRef<EChartsInstance | null>(null)
  const chartRef = useRef<HTMLDivElement | null>(null)

  const resize = useCallback(
    () =>
      chartInstance.current?.resize({
        animation: {
          easing: 'cubicIn',
          duration: 1500
        }
      }),
    []
  )

  const setOption = useCallback(() => chartInstance.current?.setOption(option ?? {}), [option])

  /**
   * When the following properties change, the chart will be re-rendered, but before that, the chart will be disposed first.
   * - initOptions
   * - options
   * - theme
   */
  useEffect(() => {
    const init = () => {
      const alreadyInit = echarts.getInstanceByDom(chartRef.current!)
      if (!alreadyInit) {
        chartInstance.current = echarts.init(chartRef.current!, themeStore.theme, {
          renderer: 'svg',
          ...initOptions
        })
        setOption()
        resize()
      }
    }
    init()
    return () => {
      chartInstance.current?.dispose()
      chartInstance.current = null
    }
  }, [initOptions, resize, setOption, themeStore.theme])

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

  useImperativeHandle(
    ref,
    () => ({
      get instance() {
        return chartInstance.current
      },
      get chartRef() {
        return chartRef.current
      },
      resize,
      setOption
    }),
    [resize, setOption]
  )

  return (
    <div
      ref={chartRef}
      {...divProps}
    />
  )
})
export default ReactChart
