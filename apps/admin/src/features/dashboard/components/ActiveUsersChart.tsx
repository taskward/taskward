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
        title: {
          text: 'Active Users',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 10,
          tooltip: true,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: data?.xAxis.map((i) => i.label) ?? [],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: { type: 'value' },
        series:
          data?.yAxis.map((i) => ({
            type: 'line',
            name: i.label,
            data: i.value
          })) ?? []
      }}
    />
  )
}
