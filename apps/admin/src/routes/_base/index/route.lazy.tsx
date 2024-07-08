import { createLazyFileRoute } from '@tanstack/react-router'

import {
  ActiveUsersChart,
  activeUsersData,
  UserGrowthChart,
  userGrowthData
} from '@/features/dashboard'
import type { ChartData } from '@/shared/charts'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

function Page() {
  const [userGrowthD, setUserGrowthD] = useState<ChartData>({
    xAxis: [...userGrowthData.xAxis],
    yAxis: []
  })
  const [activeUsersD, setActiveUsersD] = useState<ChartData>({
    xAxis: [...activeUsersData.xAxis],
    yAxis: []
  })

  useEffect(() => {
    setTimeout(() => {
      setUserGrowthD(userGrowthData)
      setActiveUsersD(activeUsersData)
    }, 500)
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
            <div className="h-28">123</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="h-28">Card5</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="h-28">Card5</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="h-28">Card5</div>
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
