import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  AxisPointerComponent,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'

echarts.use([
  AxisPointerComponent,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  CanvasRenderer,
  SVGRenderer,
  UniversalTransition
])

type ECharts = typeof echarts
type EChartsInstance = echarts.ECharts

export { echarts }
export type { ECharts, EChartsInstance }

export interface ChartData {
  xAxis: ChartDataXAxisItem[]
  yAxis: ChartDataYAxisItem[]
}

export interface ChartDataXAxisItem {
  label: string
  color?: string
}

export interface ChartDataYAxisItem {
  label: string
  value: number[]
  color?: string
}
