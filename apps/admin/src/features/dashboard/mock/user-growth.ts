import type { ChartData } from '@/shared/charts'

import { generateRandomDataValues } from './utils'

export const userGrowthData: ChartData = {
  xAxis: [],
  yAxis: [
    {
      label: 'Web',
      value: generateRandomDataValues(),
      color: '#0078d7'
    },
    {
      label: 'iOS',
      value: generateRandomDataValues(),
      color: '#00bc70'
    },
    {
      label: 'Android',
      value: generateRandomDataValues(),
      color: '#f503f2'
    },
    {
      label: 'Desktop',
      value: generateRandomDataValues(),
      color: '#f2a103'
    },
    {
      label: 'Mini App',
      value: generateRandomDataValues(),
      color: '#f20303'
    },
    {
      label: 'Website',
      value: generateRandomDataValues(),
      color: '#f203f2'
    }
  ]
}
