import { themeBaseToken } from '@bit-ocean/theme'
import type { EChartsOption } from 'echarts'

import chinaJson from '@/assets/json/geo/china.json'

import { userDistributionData } from '../mock'

export function UserDistributionChart() {
  const themeStore = useThemeStore()

  const [currentOption, setOption] = useState<EChartsOption>({})

  userDistributionData.sort((a, b) => a.value - b.value)

  const mapOption: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: themeBaseToken.fontFamily
      },
      backgroundColor: '',
      visualMap: {
        left: 'right',
        min: 0,
        max: 500,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'users',
          type: 'map',
          roam: true,
          map: 'China',
          data: userDistributionData,
          animationDurationUpdate: 1000,
          universalTransition: true
        }
      ],
      toolbox: {
        feature: {
          saveAsImage: {
            pixelRatio: 2
          }
        }
      }
    }),
    []
  )

  const barOption: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: themeBaseToken.fontFamily
      },
      title: {
        text: 'User Distribution',
        left: 'center'
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30,
          alignWithLabel: true
        },
        data: userDistributionData.map((i) => i.name)
      },
      series: {
        type: 'bar',
        id: 'users',
        colorBy: 'data',
        data: userDistributionData.map((i) => i.value),
        animationDurationUpdate: 1000,
        universalTransition: true
      },
      toolbox: {
        feature: {
          saveAsImage: {
            pixelRatio: 2
          }
        }
      }
    }),
    []
  )

  useEffect(() => {
    const patchedChinaJson = {
      ...chinaJson,
      features: chinaJson.features.filter(
        (i) => !['南海诸岛', '十段线'].includes(i.properties.name)
      )
    }

    echarts.registerMap('China', patchedChinaJson as any)
  }, [])

  useEffect(() => {
    setOption(mapOption)
    const interval = setInterval(() => {
      setOption((prev) => (prev.visualMap ? barOption : mapOption))
    }, 10000)
    return () => clearInterval(interval)
  }, [barOption, mapOption])

  return (
    <ReactChart
      className="h-80 w-full"
      theme={themeStore.theme}
      option={currentOption}
      initOps={{ renderer: 'canvas' }}
      setOptionOps={{ notMerge: true }}
    />
  )
}
