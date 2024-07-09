import { createLazyFileRoute, Link } from '@tanstack/react-router'

import {
  ActiveUsersChart,
  generateActiveUsersData,
  generateUserGrowthData,
  UserGrowthChart
} from '@/features/dashboard'
import type { ChartData } from '@/shared/charts'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

function Page() {
  const [userGrowthD, setUserGrowthD] = useState<ChartData>({
    xAxis: [],
    yAxis: []
  })
  const [activeUsersD, setActiveUsersD] = useState<ChartData>({
    xAxis: [],
    yAxis: []
  })

  useEffect(() => {
    setUserGrowthD(generateUserGrowthData())
    setActiveUsersD(generateActiveUsersData())

    const interval = setInterval(() => {
      setUserGrowthD(generateUserGrowthData())
      setActiveUsersD(generateActiveUsersData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Flex
      vertical
      gap={12}
    >
      <span className="text-2xl">Dashboard</span>
      <Row gutter={[12, 12]}>
        <Col span={6}>
          <Card>
            <div className="h-40">
              TODO:
              <ul>
                <li>Table</li>
                <li>✅ Multi-BarChart</li>
                <li>Multi-BarChart(Reverse)</li>
                <li>✅ Multi-LineChart</li>
                <li>PieChart</li>
                <li>GaugeChart</li>
                <li>BarLineCompChart</li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="h-40">
              <Link to="/dev/charts">
                <Button>Chart Demo</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="h-40">Card5</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="h-40">Card5</div>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <UserGrowthChart data={userGrowthD} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ActiveUsersChart data={activeUsersD} />
          </Card>
        </Col>
      </Row>
    </Flex>
  )
}
