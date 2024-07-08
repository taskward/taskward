import type { ChartData } from '@/shared/charts'

interface UserGrowthChartProps {
  data?: ChartData
}

export function UserGrowthChart(props: UserGrowthChartProps) {
  const { data } = props

  return (
    <ReactChart
      className="h-80 w-full"
      option={{
        title: {
          text: 'User Growth',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: data?.xAxis.map((i) => i.label),
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: { type: 'value' },
        series: data?.yAxis.map((i) => ({
          type: 'bar',
          name: i.label,
          data: i.value
        }))
      }}
    />
  )
}
