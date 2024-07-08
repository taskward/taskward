import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import type {
  AxisPointerComponentOption,
  DatasetComponentOption,
  DataZoomComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption
} from 'echarts/components'
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
import type { ComposeOption } from 'echarts/core'
import * as echarts from 'echarts/core'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'

type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | ToolboxComponentOption
  | AxisPointerComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | DataZoomComponentOption
>

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
export type { ECharts, EChartsInstance, ECOption }

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
