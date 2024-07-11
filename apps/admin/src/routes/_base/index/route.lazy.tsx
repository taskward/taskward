import { createLazyFileRoute, Link } from '@tanstack/react-router'

import { ActiveUsersChart, UserDistributionChart, UserGrowthChart } from '@/features/dashboard'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

function Page() {
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
            <UserGrowthChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ActiveUsersChart />
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <UserDistributionChart />
          </Card>
        </Col>
      </Row>
    </Flex>
  )
}
