import type { ChartData } from '@/shared/charts'

import { generateRandomDataValues, getLastTwoWeeks } from './utils'

export const activeUsersData: ChartData = {
  xAxis: getLastTwoWeeks().map((i) => ({ label: i })),
  yAxis: [
    {
      label: 'Web',
      value: generateRandomDataValues(14),
      color: '#0078d7'
    },
    {
      label: 'iOS',
      value: generateRandomDataValues(14),
      color: '#00bc70'
    },
    {
      label: 'Android',
      value: generateRandomDataValues(14),
      color: '#f503f2'
    },
    {
      label: 'Desktop',
      value: generateRandomDataValues(14),
      color: '#f2a103'
    },
    {
      label: 'Mini App',
      value: generateRandomDataValues(14),
      color: '#f20303'
    },
    {
      label: 'Website',
      value: generateRandomDataValues(14),
      color: '#f203f2'
    }
  ]
}
