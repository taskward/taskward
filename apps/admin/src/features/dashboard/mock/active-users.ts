import { generateRandomDataValues, getLastWeek } from './utils'

export const generateActiveUsersData = () => ({
  xAxis: getLastWeek().map((i) => ({ label: i })),
  yAxis: [
    {
      label: 'Web',
      value: generateRandomDataValues(7),
      color: '#0078d7'
    },
    {
      label: 'iOS',
      value: generateRandomDataValues(7),
      color: '#00bc70'
    },
    {
      label: 'Android',
      value: generateRandomDataValues(7),
      color: '#f503f2'
    },
    {
      label: 'Desktop',
      value: generateRandomDataValues(7),
      color: '#f2a103'
    },
    {
      label: 'Mini App',
      value: generateRandomDataValues(7),
      color: '#f20303'
    },
    {
      label: 'Website',
      value: generateRandomDataValues(7),
      color: '#f203f2'
    }
  ]
})
