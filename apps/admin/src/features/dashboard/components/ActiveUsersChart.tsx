import type { ChartData } from '@/shared/charts'

interface ActiveUsersChartProps {
  data?: ChartData
}

export function ActiveUsersChart(props: ActiveUsersChartProps) {
  const { data } = props

  return (
    <ReactChart
      className="h-80 w-full"
      option={{
        textStyle: {
          fontFamily: 'inherit'
        },
        title: {
          text: 'Active Users',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          left: 0,
          right: 120,
          bottom: 10,
          tooltip: true,
          containLabel: true
        },
        legend: {
          data: data?.yAxis.map((i) => i.label),
          align: 'left',
          right: 0,
          top: 'center',
          orient: 'vertical'
        },
        xAxis: {
          type: 'category',
          data: data?.xAxis.map((i) => i.label) ?? [],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series:
          data?.yAxis.map((i) => ({
            type: 'line',
            name: i.label,
            data: i.value
          })) ?? [],
        toolbox: {
          feature: {
            magicType: {
              type: ['stack']
            },
            saveAsImage: {
              pixelRatio: 2
            }
          }
        }
      }}
    />
  )
}
