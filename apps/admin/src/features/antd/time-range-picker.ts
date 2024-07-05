import type { TimeRangePickerProps } from 'antd'
import dayjs from 'dayjs'

export const timeRangePickerPresets: TimeRangePickerProps['presets'] = [
  { label: '今天', value: [dayjs().startOf('d'), dayjs()] },
  { label: '昨天', value: [dayjs().add(-1, 'd').startOf('d'), dayjs().add(-1, 'd').endOf('d')] },
  { label: '过去 3 天', value: [dayjs().add(-3, 'd'), dayjs()] },
  { label: '过去 7 天', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '过去 14 天', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: '过去 30 天', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: '过去 90 天', value: [dayjs().add(-90, 'd'), dayjs()] },
  { label: '本周', value: [dayjs().startOf('w'), dayjs()] },
  { label: '上周', value: [dayjs().add(-1, 'w').startOf('w'), dayjs().add(-1, 'w').endOf('w')] },
  { label: '本月', value: [dayjs().startOf('M'), dayjs()] }
]
